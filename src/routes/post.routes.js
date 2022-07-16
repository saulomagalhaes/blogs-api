const express = require('express');

const router = express.Router();
const postController = require('../controllers/postController');

router.get('', postController.getByAllPostsUsersAndCategories);
router.get('/:id', postController.getPostById);
router.post('', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

module.exports = router;