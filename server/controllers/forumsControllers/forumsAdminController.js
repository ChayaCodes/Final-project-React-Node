/// CRUD בסיסי

const Forum = require('../../models/Forum');
const Thread = require('../../models/Thread');

const getForums = async (req, res) => {
    try {
        const {page} = req.query;
        const forums = await Forum.find().limit(50).skip(50 * (page - 1)).lean();
        res.json(forums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getForumThreads = async (req, res) => {
    try{
        const forumId = req.params.id
        //return all the threads of forum
        const threads = await Thread.find({forum: forumId}).populate('user', 'userName').lean();
        res.json(threads)

    }catch(err) {
        res.status(500).json({ message: err.message });

    }
}

const getForum = async (req, res) => {
    try {
        const forum = await Forum.findById(req.params.id,{ password: 0 }).lean();
        res.json(forum);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createForum = async (req, res) => {
    const { name, description, threads, public } = req.body;
    if (!name || !description) return res.status(400).json({ message: "name and description are required" });
    const newForum = new Forum({ name, description, threads, public });
    
    try {
        const savedForum = await newForum.save({ password: 0 });
        res.json(savedForum);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateForum = async (req, res) => {
    try {
        const { name, description, threads, public } = req.body;
        const updatedForum = await Forum.findById(req.params.id);
        if(name) updatedForum.name = name;
        if(description) updatedForum.description = description;
        if(threads) updatedForum.threads = threads;
        if(public) updatedForum.public = public;
        const savedForum = await updatedForum.save({ password: 0 });
        res.json(savedForum);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteForum = async (req, res) => {
    try {
        const deletedForum = await Forum.findByIdAndDelete(req.params.id);
        res.json("Forum deleted");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getForums,
    getForum,
    getForumThreads,
    createForum,
    updateForum,
    deleteForum
};
