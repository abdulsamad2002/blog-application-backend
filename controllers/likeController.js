const Like = require ('../models/like.model.js')
const Post = require ('../models/post.model.js')

exports.likePost = async (req,res)=>{
    try {
        const {post, user} = req.body
        const likes = new Like({
            post, user
        })
        const likedResponse = await Like.create(likes)
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: likedResponse._id}}, {new: true}).populate('likes').exec()
        res.status(200).json({
            success: true,
            respone: updatedPost,
            message: "Like delivered successfully"
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

//req elements for unliking are post and like IDs
exports.unlikePost = async(req,res)=>{
    try {
        const {post, like} = req.body
        const unlike = await Like.findOneAndDelete({post:post, _id:like})
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: like}}, {new:true}) 
        res.status(200).json({
            success: true,
            response: updatedPost,
            message: "Operation successful"
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