const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({ message: 'please enter all fields', data: req.body });
  }
  let user = await User.findOne({ userName }).lean();
  if (!user) {
    user = await User.findOne({ email: userName }).lean();
    if (!user) {
      return res.status(400).json({ message: 'unauthorized - user not found' });
    }
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'unauthorized - invalid password' });
  }

  const userInfo = {
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    id: user._id,
    forums: user.forums || [],
  };
  const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

  const refreshToken = jwt.sign({ userName: user.userName }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

  res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 14 * 24 * 60 * 60 * 1000 });
  res.status(200).json({ token, user: userInfo });
};

const register = async (req, res) => {
  const {
    firstName, lastName, email, password, userName,
  } = req.body;
  if (!firstName || !lastName || !email || !password || !userName) {
    return res.status(400).json({ message: 'please enter all fields' });
  }
  const duplicateEmail = await User.findOne({ email }).lean();
  if (duplicateEmail) {
    return res.status(400).json({ message: 'email already exists' });
  }
  const duplicateUserName = await User.findOne({ userName }).lean();
  if (duplicateUserName) {
    return res.status(400).json({ message: 'userName already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      firstName, lastName, email, password: hashedPassword, userName,
    });
    const avatarName = newUser.userName.split(' ').join('+');
    newUser.avatar = `https://ui-avatars.com/api/?name=${avatarName}&length=1&rounded=true&bold=true&background=random&size=128`;
    const user = await newUser.save();
    const userInfo = { user, password: undefined };

    res.status(201).json(userInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const refresh = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.jwt) {
    return res.status(401).json({ message: 'unauthorized', error: true, data: null });
  }

  let refreshToken = cookie.jwt;
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'forbidden', error: true, data: null });
    }
    const foundUser = await User.findOne({ userName: decoded.userName }).lean();
    if (!foundUser) {
      return res.status(404).json({ message: 'user not found', error: true, data: null });
    }

    const userInfo = {
      userName: foundUser.userName,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      role: foundUser.role,
      avatar: foundUser.avatar,
      id: foundUser._id,
      forums: foundUser.forums || [],
    };
    refreshToken = jwt.sign({ userName: foundUser.userName }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

    const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.status(200).json({ token, user: userInfo });
  });
};

const logout = async (req, res) => {
  const { cookies } = req;
  if (!cookies?.jwt) {
    return res.status(204).json({ message: 'no cookies', error: true, data: null });
  }
  res.clearCookie('jwt', { httpOnly: true });
  return res.status(200).json({ message: 'logged out', error: false, data: null });
};

module.exports = {
  login, register, refresh, logout,
};
