var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/posts');

router.get('/', PostsControllers.getPosts);

router.post('/', PostsControllers.createdPosts);

router.get('/:id', PostsControllers.getPost);

router.delete('/:id', PostsControllers.deletePost);

module.exports = router;
