const { User } = require('../database/models');
const { throwConflictError } = require('./utils');

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
};

module.exports = userService;