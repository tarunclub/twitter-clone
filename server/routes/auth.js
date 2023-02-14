const { login, logout, register } = require('../controllers/auth');

const router = require('express').Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/logout').post(logout);

module.exports = router;
