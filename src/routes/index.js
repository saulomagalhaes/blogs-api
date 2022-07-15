const express = require('express');

const router = express.Router();

const routesLogin = require('./login.routes');
const routesUser = require('./user.routes');
const routesCategories = require('./categories.routes');
const routesPost = require('./post.routes');

router.use('/login', routesLogin);
router.use('/user', routesUser);
router.use('/categories', routesCategories);
router.use('/post', routesPost);

module.exports = router;