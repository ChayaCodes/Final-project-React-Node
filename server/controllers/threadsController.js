const Forum = require('../models/Forum');
const Thread = require('../models/Thread');
const User = require('../models/User');
const Post = require('../models/Post');

const getthreads = async (req, res) => {
    try {
        const threads = await Thread.find();
        threads.sort((a, b) => { b.createdAt - a.createdAt })
        if (req.user.role === 'admin') {
            return res.json(threads);
        }

        res.json(threads.filter(thread => thread.public || req.user.user.forums.includes(thread.forum.id)));

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getThreadPosts = async (req, res) => {
    try {
        const thread = await Thread.findById(req.params.id);
        if (req.user.role !== 'admin' && !req.user.forums.includes(thread.forum) && !thread.public) {
            return res.status(401).json({ message: "You do not have permissions" });
        }
        //מחזיר את כל הנתונים של הפוסטים של הסרד
        const posts = await Promise.all(thread.posts.map(async (post) => {
            const deepPost = await Post.findById(post);
            if (!deepPost) return null;
            console.log(deepPost);
            const user = await User.findById(deepPost.user, { userName: 1, avatar: 1 , color: 1});  
            user.password = undefined;
            
            deepPost.user = user;
            return  deepPost ;
        }))
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



const getLastForumTreads = (req, res) => {
    try {


    } catch (err) {
        res.status(500).json({ message: err.message });

    }
}

const get50forumthreads = async (req, res) => {
    try {
        const startIndex = req.params.startIndex || 0;
        const threads = await Thread.find({ forum: req.params.id }) //מקבל את כל הסרדים של הפורום
        //סינון לפי הרשאות:
        if (req.user.role === 'admin' || res.user.forums.includes(req.params.id) || threads.forum.public) {
            return res.json(threads.slice(startIndex, startIndex + 50));
        }
        res.json([]);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getthread = async (req, res) => {
    try {

        const thread = await Thread.findById(req.params.id);
        if (req.user.role !== 'admin' && !req.user.forums.includes(req.params.id) && !thread.forum.public) {
            return res.status(401).json({ message: "You do not have permissions" });
        }
        res.json(thread);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createthread = async (req, res) => {

    try {

        const { title, description, forum, } = req.body
        if (!title || !description || !forum) {
            return res.status(400).json({ message: "please enter all fields" })
        }
        const forumToUpdate = await Forum.findById(forum);
        const userForums = req.user.forums;
        if (req.user.role !== 'admin' && !userForums.includes(forum) && !forumToUpdate.public) {
            return res.status(401).json({ message: "You do not have permissions" });
        }
        const thread = new Thread({
            title,
            description,
            posts: [],
            forum,
            user: req.user.id,
            userName: req.user.userName,
            open: true,
            public: forumToUpdate.public,
        })


        const newthread = await thread.save();
        forumToUpdate.threads.push(newthread.id);
        await forumToUpdate.save();
        res.status(201).json(newthread);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const updatethread = async (req, res) => {
    try {

        const thread = await Thread.findById(req.params.id);
        const forumToUpdate = await Forum.findById(thread.forum);
        const userForums = req.user.user.forums;
        if (req.user.role !== 'admin' && !userForums.includes(thread.forum) && !forumToUpdate.public) {
            return res.status(401).json({ message: "You do not have permissions" });
        }

        const { title, content, description } = req.body

        const updatedthread = await thread.save();

        res.json(updatedthread);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deletethread = async (req, res) => {
    try {
        const thread = await Thread.findById(req.params.id);

        const forumToUpdate = await Forum.findById(thread.forum);
        const userForums = req.user.user.forums;
        if (req.user.role !== 'admin' && !userForums.includes(thread.forum) && !forumToUpdate.public) {
            return res.status(401).json({ message: "You do not have permissions" });
        }
        if (thread) {
            await thread.deleteOne();
            forumToUpdate.threads = forumToUpdate.threads.filter(id => id !== thread.id);
            await forumToUpdate.save();
            res.json({ message: "Thread deleted" });

        } else {
            res.json({ message: "Thread not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getthreads,
    getthread,
    createthread,
    updatethread,
    deletethread,
    getThreadPosts,
    get50forumthreads
}