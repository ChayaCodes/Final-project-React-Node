const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tread',
    required: true,
  },
  forum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forum',
  },

}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
