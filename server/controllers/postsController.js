const Post = require('../models/Post');

const getposts = async (req, res) => {
    try {
        let query;
        if(req.user.role == 'admin'){
            query = {};
        }
        // או ש post.forum.public = true
        // או ש post.forum._id נמצא בתוך req.user.forums
        else{
            query = {
                porum: {
                $or: [
                    { public: true },
                    { _id: { $in: req.user.forums } }
                ]
            }
            };
        }
        const posts = await Post.find(query);
        
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getpost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(req.user.role !== 'admin' && !req.user.forums.includes(post.forum) && !post.forum.public){
            return res.status(401).json({ message: "You do not have permissions" });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createpost = async (req, res) => {
    if(req.user.role !== 'admin' && !req.user.forums.includes(req.body.forum)){
        return res.status(401).json({ message: "You do not have permissions" });
    }

    const { content, user, forum, thread } = req.body;
    const post = new Post({ content, user, forum, thread });
    try {
        const newpost = await post.save();
        res.status(201).json(newpost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updatepost = async (req, res) => {
    try { 
        //רק משתמש שהוא אדמין או שהוא המשתמש שיצר את הפוסט יכול לעדכן אותו
        if(req.user.role !== 'admin' && !req.user===post.user){
            return res.status(401).json({ message: "You do not have permissions" });
        }
        const post = await Post.findById(req.params.id);
        if (req.body.title) post.title = req.body.title;
        if (req.body.content) post.content = req.body.content;
        if (req.body.user) post.user = req.body.user;
        if (req.body.forum) post.forum = req.body.forum;
        if (req.body.thread) post.thread = req.body.thread;
        const updatedpost = await post.save();

        res.json(updatedpost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deletepost = async (req, res) => {
    try {
        //רק משתמש שהוא אדמין או שהוא המשתמש שיצר את הפוסט יכול למחוק אותו
        if(req.user.role !== 'admin' && !req.user===post.user){
            return res.status(401).json({ message: "You do not have permissions" });
        }
        const post = await Post.findById(req.params.id);
        if (post) {
            await post.deleteOne();
            res.json({ message: "Post deleted" });
        } else {
            res.json({ message: "Post not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getposts,
    getpost,
    createpost,
    updatepost,
    deletepost
}