const express = require('express');

const router = express.Router();

const routesLogin = require('./login.routes');
const routesUser = require('./user.routes');

router.use('/login', routesLogin);
router.use('/user', routesUser);

module.exports = router;