const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
const User = require("../../models/User")

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
        posts: cntPosts + cntThreads,
        lastPost: {
          title: lastPost?.title,
          userName: lastPostUser?.userName,
          date: lastPost?.updatedAt,
          userAvatar: lastPostUser?.avatar
        },
      };

    }));
    res.json(forumsData);

  }catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

const getForum = async (req, res) => {
  // get forum by id with data: title, threads, where each thread contains: title, author - userName, user avatar, date, last post: user - userName, user avatar, date
  try {
    const forum = await Forum.findById(req.params.id).populate('threads');
    const threads = await Promise.all(forum.threads.map(async (thread) => {
      console.log("thread", thread);
      console.log(" thread posts !" , thread.posts);
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
  }catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server error: ${error}` });
  }
}



module.exports = {
  getForums, getForum
};
