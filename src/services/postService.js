const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const { BlogPost, Category, PostCategory, User } = require('../database/models');
const { throwValidationError } = require('./utils');

const postService = {
  create: async (userId, { title, content, categoryIds }) => {
    const { count } = await Category.findAndCountAll({
      where: { id: categoryIds },
    });
    if (!count) throwValidationError('"categoryIds" not found');
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({ title, content, userId }, { transaction: t }, 
        { raw: true });
      await PostCategory.bulkCreate(
        categoryIds.map((categoryId) => ({
          postId: newPost.id,
          categoryId,
        })),
        { transaction: t },
      );
      return newPost;
    });
    return result;
  },
  getByAllPostsUsersAndCategories: async () => {
    const result = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    return result;
  },
};

module.exports = postService;