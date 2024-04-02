const bcrypt = require('bcrypt');
const User = require('../../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const {
    firstName, lastName, email, userName, password, role,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    firstName, lastName, email, userName, password: hashedPassword, role,
  });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      firstName, lastName, email, userName, password, role,
    } = req.body;
    const updatedUser = await User.findById(req.params.id);
    if (firstName) updatedUser.firstName = firstName;
    if (lastName) updatedUser.lastName = lastName;
    if (email) updatedUser.email = email;
    if (userName) updatedUser.userName = userName;
    if (password) updatedUser.password = bcrypt.hash(password, 10);
    if (role) updatedUser.role = role;
    const savedUser = await updatedUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
