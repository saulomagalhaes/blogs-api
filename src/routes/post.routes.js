const express = require('express');

const router = express.Router();
const postController = require('../controllers/postController');

router.post('', postController.create);
router.get('', postController.getByAllPostsUsersAndCategories);

module.exports = router;