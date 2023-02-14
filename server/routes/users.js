const { getUser } = require('../controllers/user');

const router = require('express').Router();

router.get('/find/:userId', getUser);

module.exports = router;
