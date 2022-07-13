const express = require('express');

const router = express.Router();

const routesLogin = require('./login.routes');

router.use('/login', routesLogin);

module.exports = router;