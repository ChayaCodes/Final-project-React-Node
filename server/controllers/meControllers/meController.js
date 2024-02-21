const User = require("../../models/User");
const bcrypt = require("bcrypt");

const getMe = async (req, res) => {
    try {
        console.log(req.user);
        res.json(req.user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateMe = async (req, res) => {
    try {
        const updatedUser = await User.findById(req.user.id);
        if (req.body.firstName) {
            updatedUser.firstName = req.body.firstName;
        }
        if (req.body.lastName) {
            updatedUser.lastName = req.body.lastName;
        }
        if (req.body.email) {
            updatedUser.email = req.body.email;
        }
        if (req.body.userName) {
            updatedUser.userName = req.body.userName;
        }
        if (req.body.password) {
            updatedUser.password = bcrypt.hash(req.body.password, 10);
        }
        const user = await updatedUser.save();
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

}

const deleteMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        await user.remove();
        res.json({ message: "user deleted" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getMe, updateMe, deleteMe };