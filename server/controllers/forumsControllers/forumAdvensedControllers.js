const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
const User = require("../../models/User")
const Thread = require('../../models/Thread');

const getForums = async (req, res) => {
  // get forums with data: title, description, number of threads, number of posts, last post title, last post author, last post date, last post author avatar
  try {
    let forums = await Forum.find().populate('threads')

    const forumsData = await Promise.all(forums.map(async (forum) => {

      const lastPost = forum.threads.length > 0 ? forum.threads[0] : null;
      const lastPostUser = await User.findById(lastPost?.user)
      const cntThreads = forum.threads.length;
      let cntPosts = 0;
      forum.threads.forEach((thread) => {
        cntPosts += thread.posts.length;
      });

      const lastPostAuthor = lastPost?.user;
      const lastPostDate = lastPost?.date;
      const lastPostAuthorAvatar = lastPost?.user.avatar;
      return {
        id: forum._id,
        name: forum.name,
        description: forum.description,
        threads: cntThreads,
        posts: cntPosts,
        lastPost: {
          title: lastPost?.title,
          userName: lastPostUser?.userName,
          date: lastPost?.updatedAt,
          userAvatar: lastPostUser?.avatar
        },
      };

    }));
    res.json(forumsData);

  } catch (error) {
    console.error('error in getForums', error)
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

const getForum = async (req, res) => {
  // get forum by id with data: title, threads, where each thread contains: title, author - userName, user avatar, date, last post: user - userName, user avatar, date
  try {
    const forum = await Forum.findById(req.params.id).populate('threads');
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    const threads = await Promise.all(forum.threads.map(async (thread) => {
      const author = await User.findById(thread.user);
      const lastPostId = thread.posts.length > 0 ? thread.posts[0] : null;
      const lastPost = await Post.findById(lastPostId).populate('user');

      return {
        id: thread._id,
        title: thread.title,
        date: thread.createdAt,
        userName: author.userName,
        userAvatar: author.avatar,
        countPosts: thread.posts.length,
        countWatch: thread.countWatch,
        lastPost: {
          userName: lastPost?.user.userName,
          userAvatar: lastPost?.user.avatar,
          date: lastPost?.updatedAt
        }
      };
    }));
    res.json({ id: forum._id, name: forum.name, threads });
  } catch (error) {
    console.error('error in getForum', error)
    res.status(500).json({ message: `Server error: ${error}` });
  }
}

const getThreadById = async (req, res) => {
  try {
    const threadId = req.params.threadId;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * 20;
    const thread1 = await Thread.findById(threadId)
    if (!thread1) {
      return res.status(404).json({ message: 'Thread not found' });
    }

    thread1.countWatch += 1;
    await thread1.save();

    const thread = await Thread.findById(threadId)
      .populate({
        path: 'posts',
        options: {
          sort: { createdAt: 1 },
          limit: 20,
          skip: skip
        },
      })

    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    const posts = await Promise.all(thread.posts.map(async (post) => {
      const user = await User.findById(post.user);
      return {
        id: post._id,
        content: post.content,
        date: post.updatedAt,
        userName: user ? user.userName : 'deleted user',
        userAvatar: user ? user.avatar : 'https://ui-avatars.com/api/?name=deletd%20know&length=1&rounded=true&bold=true&background=random&size=128'
      };
    }));


    const totalPosts = await Post.countDocuments({ thread: threadId });
    const totalPages = Math.ceil(totalPosts / 20);
    const user = await User.findById(thread.user);

    res.json({
      id: thread._id,
      title: thread.title,
      posts: posts,
      totalPages,
      userName: user.userName,
      userAvatar: user.avatar,
      date: thread.createdAt,
    });
  } catch (error) {
    console.error('error in getThreadById', error)
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

const createPost = async (req, res) => {
  const threadId = req.params.threadId;
  const { content } = req.body;
  const user = req.user;

  try {
    const thread = await Thread.findById(threadId);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    const post = new Post({
      content,
      user: user.id,
      thread: threadId,
    });
    await post.save();
    thread.posts.push(post._id);
    await thread.save();
    res.json({ message: 'Post created' });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}`, threadId });
  }
};


const createThread = async (req, res) => {
  try {
    const forumId = req.params.forumId; 

    const { title, description } = req.body;
    const user = req.user;
    const forum = await Forum.findById(forumId); 
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    const thread = new Thread({
      title,
      description,
      user: user.id,
      forum: forumId,
      posts: [],
    });

    const firstPost = new Post({
      content: description,
      user: user.id,
      thread: thread._id,
    });

    await firstPost.save();
    thread.posts.push(firstPost._id);



    await thread.save();
    if (forum.threads)
      forum.threads.push(thread._id);
    else
      forum.threads = [thread._id]
    await forum.save();
    res.json({ message: 'Thread created', thread });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

module.exports = {
  getForums, getForum, getThreadById, createPost, createThread
};
