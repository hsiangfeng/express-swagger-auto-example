var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/posts');

const { checkAPIPath1, checkAPIPath2 } = require('../middleware/auth');

router.get('/', [checkAPIPath1],PostsControllers.getPosts);

router.post('/', [checkAPIPath1], PostsControllers.createdPosts);

router.get('/:id', [checkAPIPath2],PostsControllers.getPost);

router.delete('/:id', [checkAPIPath2],PostsControllers.deletePost);

module.exports = router;
