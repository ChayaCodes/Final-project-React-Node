const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
const User = require("../../models/User")

const getForums = async (req, res) => {
  // get forums with data: title, description, number of threads, number of posts, last post title, last post author, last post date, last post author avatar
  try {
    let forums = await Forum.find().populate('threads')

    const forumsData = await Promise.all(forums.map(async (forum) => {
      console.log("forum: ", forum);
      
      const lastPost = forum.threads.length > 0 ? forum.threads[0] : null;
      const lastPostUser = await User.findById(lastPost?.user)
      console.log("lastPost", lastPost)
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

  }catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

module.exports = {
  getForums
};
