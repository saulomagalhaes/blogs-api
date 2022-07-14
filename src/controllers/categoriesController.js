const authService = require('../services/authService');
const categoriesService = require('../services/categoriesService');

const categoriesController = {
  createCategory: async (req, res) => {
    const { name } = await authService.validateCreateCategory(req.body);
    const token = await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(token);
    const category = await categoriesService.createCategory(name);
    res.status(201).json(category);
  },
  getAllCategories: async (req, res) => {
    const token = await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(token);
    const categories = await categoriesService.getAllCategories();
    res.status(200).json(categories);
  },
};

module.exports = categoriesController;