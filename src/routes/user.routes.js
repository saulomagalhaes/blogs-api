const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('', userController.create);
router.get('', userController.getAllUsers);

module.exports = router;