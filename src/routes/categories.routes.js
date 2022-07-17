const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.post('/', categoriesController.createCategory);
router.get('/', categoriesController.getAllCategories);

module.exports = router;