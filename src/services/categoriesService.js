const { Category } = require('../database/models');

const categoriesService = {
  createCategory: async (name) => {
    const category = await Category.create({ name });
    return category;
  },
};

module.exports = categoriesService;