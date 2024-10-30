const Contect = require('../../models/Contect');

const createContect = async (req, res) => {
    const { firstName, lastName, phone, email, message } = req.body;
    if (!firstName || !lastName || !email || !message) return res.status(400).json({ message: "firstName, lastName, email, message are required" });
    const newContect = new Contect({ firstName, lastName, phone, email, message });
    
    try {
        const savedContect = await newContect.save();
        res.json(savedContect);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createContect,
}