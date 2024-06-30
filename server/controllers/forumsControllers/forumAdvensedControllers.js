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
    console.log(error);
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
      console.log("thread", thread);
      console.log(" thread posts !", thread.posts);
      const author = await User.findById(thread.user);
      const lastPostId = thread.posts.length > 0 ? thread.posts[0] : null;
      console.log("lastPostId", lastPostId)
      const lastPost = await Post.findById(lastPostId).populate('user');
      console.log("lastPost", lastPost);

      return {
        id: thread._id,
        title: thread.title,
        date: thread.updatedAt,
        userName: author.userName,
        userAvatar: author.avatar,
        lastPost: {
          userName: lastPost?.user.userName,
          userAvatar: lastPost?.user.avatar,
          date: lastPost?.updatedAt
        }
      };
    }));
    res.json({ id: forum._id, name: forum.name, threads });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server error: ${error}` });
  }
}

const getThreadById = async (req, res) => {
  const threadId = req.params.threadId;
  const page = parseInt(req.query.page) || 1;

  const skip = (page - 1) * 20;
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
      userName: user.userName,
      userAvatar: user.avatar,
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
};

const createPost = async (req, res) => {
  const threadId = req.params.threadId;
  const { content } = req.body;
  const user = req.user;
  console.log("create post user ", user);

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
    console.log("post", post);
    await post.save();
    thread.posts.push(post._id);
    await thread.save();
    res.json({ message: 'Post created' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server error: ${error}`, threadId });
  }
};


const createThread = async (req, res) => {
  try {
    const forumId = req.params.forumId; // also fixed req.param to req.params

    const { title, description } = req.body;
    const user = req.user;
    const forum = await Forum.findById(forumId); // added await here
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
