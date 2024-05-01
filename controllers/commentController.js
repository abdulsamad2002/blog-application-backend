const comment = require('../models/comment.model.js')
const Post = require('../models/post.model.js')

exports.createComment = async (req,res)=>{
    try {
        const {post, user, commentBody} =req.body
        const comments = new comment({
            post, user, commentBody
        })
        const savedComment = await comment.create(comments)

        //Finding post by ID on which the comment was made and adding in it's comment's array the ID of comment.
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments")
                            .exec()      //Sends the entire comment model in the comments array of post model.
            res.status(200).json({
            success: true,
            response: savedComment,
            post: updatedPost,
            message: "Data received successfully."
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            code:error.message,
            message: "Internal Error"
        })
    }
}