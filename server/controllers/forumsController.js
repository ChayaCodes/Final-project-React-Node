const Forum = require('../models/Forum');

const getforums = async (req, res) => {
    //משתמש מנהל יכול לראות את כל הפורומים
    //משתמש רגיל יכול לראות רק פורומים שהוא רשום אליהם או פורומים ציבוריים
    try {
        const forums = await Forum.find();

        if(req.user.role === 'admin'){
            return res.json(forums);
        }
        const userForums = req.user.user.forums;
        const filteredForums = forums.filter(forum => forum.public || userForums.includes(forum.id));
        res.json(filteredForums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getforum = async (req, res) => {
    // מחזיר את הפורום רק אם המשתמש הוא אדמין או שהוא רשום לפורום זה או שהפורום הוא ציבורי
    try {
        
        const forum = await Forum.findById(req.params.id);
        if(req.user.role === 'admin'){
            return res.json(forum);
        }if(forum.public || req.user.user.forums.includes(req.params.id)){
            return res.json(forum);
        }else{
            return res.status(401).json({ message: "You do not have permissions" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

    
}

const createforum = async (req, res) => {
    // רק משתמש שהוא אדמין יכול ליצור פורום חדש
    console.log(req.user.role)
    if(req.user.role !== 'admin'){
        return res.status(401).json({ message: "You do not have permissions" });
    }
    const forum = new Forum({
        name: req.body.name,
        description: req.body.description,
        public: req.body.public
    });
    try {
        const newforum = await forum.save();
        res.status(201).json(newforum);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateforum = async (req, res) => {
    // רק משתמש שהוא אדמין יכול לעדכן פורום (שם ותיאור)
    try {
        if(req.user.role !== 'admin'){
            return res.status(401).json({ message: "You do not have permissions" });
        }
        const forum = await Forum.findById(req.params.id);
        if (req.body.name) forum.name = req.body.name;
        if (req.body.description) forum.description = req.body.description;
        const updatedforum = await forum.save();
        res.json(updatedforum);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const addthread = async (req, res) => {
    // רק משתמש שהוא אדמין או שהוא רשום לפורום או שהפורום הוא ציבורי זה יכול להוסיף סרד לפורום
    try { 
        const forum = await Forum.findById(req.params.id);
        if(req.user.role !== 'admin' && !req.user.forums.includes(req.params.id) && !forum.public){
            return res.status(401).json({ message: "You do not have permissions" });
        }

        forum.threads.push(req.body.thread);
        const updatedforum = await forum.save();
        res.json(updatedforum);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const removethread = async (req, res) => {
    //רק משתמש שהוא אדמין או שהוא יצר את הסרד יכול למחוק אותו
    try {
        const forum = await Forum.findById(req.params.id);
        if(req.user.role !== 'admin' && !req.user.id === req.body.thread.user){
            return res.status(401).json({ message: "You do not have permissions" });
        }

        forum.threads = forum.threads.filter(thread => thread.id !== req.params.threadId);
        const updatedforum = await forum.save();
        res.json(updatedforum);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteforum = async (req, res) => {
    // רק משתמש שהוא אדמין יכול למחוק פורום
    if(req.user.role !== 'admin'){
        return res.status(401).json({ message: "You do not have permissions" });
    }
    try {
        const forum = await Forum.findById(req.params.id);
        if (forum) {
            await forum.deleteOne();
            res.json({ message: "Forum deleted" });
        } else {
            res.json({ message: "Forum not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getforums,
    getforum,
    createforum,
    updateforum,
    deleteforum,
    addthread,
    removethread
}