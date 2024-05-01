const Post = require('../models/post.model.js')

exports.createPost = async (req,res)=>{
    try {
        const {title, postBody, likes, comments} = req.body
        const newPost = {
            title, postBody
        }
        const savedPost = await Post.create(newPost)
        res.status(200).json({
            success: true,
            response: savedPost,
            message: "Post created successfully"
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

//to be added is count of likes and comments also when populating likes the build returns error.
exports.listAllPosts = async (req,res) =>{
    try {
        const allPosts = await Post.find({}).populate("comments").populate("likes").exec()
        res.status(200).json({
            allPosts,
            message: "Fetch successfull"
        })
    } 
    catch (error) {
        res.status(500).json({
            message: "Internal error"
        })
    }
}