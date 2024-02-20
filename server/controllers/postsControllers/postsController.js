const Post = require('../../models/Post');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().lean();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createPost = async (req, res) => {
    const { title, content, author, forum, public } = req.body;
    const newPost = new Post({ title, content, author, forum, public });
    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updatePost = async (req, res) => {
    try {
        const { title, content, author, forum, public } = req.body;
        const updatedPost = await Post.findById(req.params.id);
        if(title) updatedPost.title = title;
        if(content) updatedPost.content = content;
        if(author) updatedPost.author = author;
        if(forum) updatedPost.forum = forum;
        if(public) updatedPost.public = public;
        const savedPost = await updatedPost.save();
        res.json(savedPost);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.json(deletedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};