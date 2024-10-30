const Contect = require('../../models/Contect');

const getAllContects = async (req, res) => {
    try {
        const contects = await Contect.find();
        
        res.json(contects);
        contects.forEach(async (contect) => {
            if (contect.viewed === false) {
                contect.viewed = true;
                await contect.save();
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
}

module.exports = {
    getAllContects,
}