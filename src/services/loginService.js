const { User } = require('../database/models');
const { throwValidationError } = require('./utils');

const loginService = {
  getByEmailOrThrows: async (email) => {
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) throwValidationError('Invalid fields');
    return user;
  },
  verifyUserPassword: async (typedPassword, password) => {
    if (typedPassword !== password) throwValidationError('Invalid fields');
  },
};

module.exports = loginService;
