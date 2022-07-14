const express = require('express');

const router = express.Router();

const routesLogin = require('./login.routes');
const routesUser = require('./user.routes');
const routesCategories = require('./categories.routes');

router.use('/login', routesLogin);
router.use('/user', routesUser);
router.use('/categories', routesCategories);

module.exports = router;