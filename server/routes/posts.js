const { getPosts } = require('../controllers/post');

const router = require('express').Router();

router.route('/').get(getPosts);

module.exports = router;
