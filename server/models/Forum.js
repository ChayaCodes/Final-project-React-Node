const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        //in HTML format
        type: String,        
    },
    threads: [{
        type: Schema.Types.ObjectId,
        ref: 'Thread'
    }],
    public: {
        type: Boolean,
        required:true,
        default: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true })

const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum;