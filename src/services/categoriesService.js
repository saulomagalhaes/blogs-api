const { Category } = require('../database/models');

const categoriesService = {
  createCategory: async (name) => {
    const category = await Category.create({ name });
    return category;
  },
  getAllCategories: async () => {
    const categories = await Category.findAll({ raw: true });
    return categories;
  },
};

module.exports = categoriesService;