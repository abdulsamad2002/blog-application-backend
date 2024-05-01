const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        require: true,
    },
    user:{
        type: String,
        require: true,
    },
    commentBody:{
       type: String,
       length: 100,
       require: true, 
    }
})
module.exports = mongoose.model("Comment", commentSchema)