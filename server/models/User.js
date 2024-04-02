const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 20,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 20,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  forums: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Forum',
  },
  avatar: {
    type: String,
  },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;
