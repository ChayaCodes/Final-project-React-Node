const Thread = require('../../models/Thread');
const Post = require('../../models/Post');

const getThreads = async (req, res) => {
  try {
    const threads = await Thread.find().lean();
    res.json(threads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getThread = async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id).lean();
    res.json(thread);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createThread = async (req, res) => {
  const {
    title, content, author, forum, public: isPublic,
  } = req.body;
  const newThread = new Thread({
    title, content, author, forum, isPublic,
  });
  const firstPost = new Post({
    content, user: author, thread: newThread._id, forum,
  });
  newThread.posts.push(firstPost._id);

  try {
    const savedThread = await newThread.save();
    res.json(savedThread);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateThread = async (req, res) => {
  try {
    const {
      title, content, author, forum, public: isPublic, open, stiky,
    } = req.body;
    const updatedThread = await Thread.findById(req.params.id);
    if (!updatedThread) res.status(404).json({ message: 'Thread not found' });
    if (title) updatedThread.title = title;
    if (content) updatedThread.content = content;
    if (author) updatedThread.author = author;
    if (forum) updatedThread.forum = forum;
    if (isPublic !== undefined) updatedThread.isPublic = isPublic;
    if (stiky !== undefined) updatedThread.stiky = stiky;
    if (open !== undefined) updatedThread.open = open;

    const savedThread = await updatedThread.save();
    res.json(savedThread);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteThread = async (req, res) => {
  try {
    const deletedThread = await Thread.findByIdAndDelete(req.params.id);
    res.json(deletedThread);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getThreads,
  getThread,
  createThread,
  updateThread,
  deleteThread,
};
