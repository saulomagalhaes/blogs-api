const { User } = require('../database/models');
const { throwConflictError, throwNotFoundError } = require('./utils');

const userService = {
  getByEmailOrThrows: async (email) => {
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) throwConflictError('User already registered');
    return true;
  },
  create: async (data) => {
    await User.create(data);
    return true;
  },
  getAllUsers: async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      raw: true,
    });
    return users;
  },
  getById: async (id) => {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
      raw: true,
    });
    if (!user) throwNotFoundError('User does not exist');
    return user;
  },
};

module.exports = userService;
