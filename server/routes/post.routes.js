const express= require('express');
const router= express.Router();


const {getPost, createPost}= require('../controller/post.controller')

router.get('/', getPost)
router.post('/:id', createPost)

module.exports = router