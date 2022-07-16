const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const { BlogPost, Category, PostCategory, User } = require('../database/models');
const { throwValidationError, throwNotFoundError, throwUnauthorizedError } = require('./utils');

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
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return result;
  },
  getPostById: async (id) => {
    const result = await BlogPost.findByPk(id, { 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!result) throwNotFoundError('Post does not exist');
    return result;
  },
  checkPostUserId: async (id, idToken) => {
    const result = await BlogPost.findByPk(id);
    if (!result) throwNotFoundError('Post does not exist');
    if (result.userId !== idToken) throwUnauthorizedError();
  },
  update: async (id, { title, content }) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const result = await BlogPost.findByPk(id, { 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return result;
  },
};

module.exports = postService;