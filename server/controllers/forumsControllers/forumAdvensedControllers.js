const Forum = require('../../models/Forum');

const getThreads = async (req, res) => {
    try {
        if(! req.user.forums.includes(req.params.id)) 
            return res.status(403).json({ message: "You are not authorized to view this forum" });
        const forum = await Forum.findById(req.params.id).populate({
            path: 'threads',
            select: 'title createdAt user',
            populate: {
                path: 'user',
                select: 'userName avatar color'
            }
        });
        res.status(200).json(forum.threads);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getThreads
}