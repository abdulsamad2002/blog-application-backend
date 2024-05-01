const express = require('express')
const router = express.Router()

const {createPost , listAllPosts} = require('../controllers/postController.js')
const {createComment} = require('../controllers/commentController.js')
const {likePost, unlikePost} = require('../controllers/likeController.js')

router.post('/comments', createComment)
router.post('/posts', createPost)
router.get('/listPosts', listAllPosts)
router.post('/like', likePost)
router.post('/unlike', unlikePost)

module.exports = router