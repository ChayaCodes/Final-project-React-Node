const mongoose = require('mongoose');

const { Schema } = mongoose;

const ForumSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  threads: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Thread',
    required: true,
    default: []
  },
  public: {
    type: Boolean,
    default: true,
  },

}, { timestamps: true });

module.exports = mongoose.model('Forum', ForumSchema);
