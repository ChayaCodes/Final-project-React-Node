const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {
    try {
        //רק משתמש שהוא אדמין יכול לקבל את כל המשתמשים
        if (req.user.role !== 'admin') {
            return res.status(401).json({ message: "You do not have permissions" });
        }
        const users = await User.find({}, { password: 0 }).lean();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getUser = async (req, res) => {
    try {
        //אדמין והמשתמש בעצמו יוכל לראות את כל הפרטים (ללא סיסמה)
        // כל השאר יוכלו לראות רק את השם משתמש והתמונה
            
        const user = await User.findById(req.params.id, { password: 0 }).lean();    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (req.user.role !== 'admin' && req.user.id !== req.params.id) {

            return res.json({ userName: user.userName, avatar: user.avatar});
        }
        res.json(user);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createUser = async (req, res) => {
    //רק משתמש שהוא אדמין יכול ליצור משתמש חדש 
    if (req.user.role !== 'admin') {
        return res.status(401).json({ message: "You do not have permissions" });
    }
    const { firstName, lastName, userName, password, email, role, forums, avatar } = req.body;
    if (!userName) return res.status(400).json({ message: "username is required" });
    if (!password) return res.status(400).json({ message: "password is required" });
    if (!firstName) return res.status(400).json({ message: "firstName is required" })
    if (!lastName) return res.status(400).json({ message: "lastName is required" })
    if (!email) return res.status(400).json({ message: "email is required" })

    // יצירת צבע אקראי למשתמש
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);
    // כל עוד הצבע כהה מדי נגריל צבע חדש
    while (colorR < 100 && colorG < 100 && colorB < 100) {
        colorR = Math.floor(Math.random() * 256);
        colorG = Math.floor(Math.random() * 256);
        colorB = Math.floor(Math.random() * 256);
    }
    const color = `rgb(${colorR},${colorG},${colorB})`;


    const user = new User({
        firstName,
        lastName,
        userName,
        color,
        password: await bcrypt.hash(password, 10),
        email,
        role,
        forums,
        avatar
    });

    try {
        const newUser = await user.save();
        res.status(201).json({ id: newUser._id, userName: newUser.userName });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const updateUser = async (req, res) => {
    //רק משתמש שהוא אדמין יכול לעדכן את כל השדות
    // משתמש רגיל יכול לעדכן רק לעצמו ורק את השדות הבאים: סיסמה, אימייל, תמונה שם משתמש
    try {
        if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
            return res.status(401).json({ message: "You do not have permissions" });
        }
        //ללא הסיסמה
        const user = await User.findById({ _id: req.params.id }, { password: 0 });
        
            if (req.body.password) user.password = await bcrypt.hash(req.body.password, 10);
            if (req.body.email) user.email = req.body.email;
            if (req.body.avatar) user.avatar = req.body.avatar;
            if (req.body.userName) user.userName = req.body.userName;

        if (req.user.role === 'admin'){
            if (req.body.firstName) user.firstName = req.body.firstName;
            if (req.body.lastName) user.lastName = req.body.lastName;
            if (req.body.role) user.role = req.body.role;
            if (req.body.forums) user.forums = req.body.forums;
        }
        const updatedUser = await user.save();
        updatedUser.password = undefined
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteUser = async (req, res) => {
    //רק משתמש שהוא אדמין יכול למחוק משתמש
    if (req.user.role !== 'admin') {
        return res.status(401).json({ message: "You do not have permissions" });
    }
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (user) {
            res.send(await user.deleteOne());
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}