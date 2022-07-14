const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { throwValidationError } = require('./utils');

const authService = {
  validateBodyLogin: async (body) => {
    const schema = Joi.object({
      email: Joi.string().email().max(255).required(),
      password: Joi.string().max(255).required(),
    });
    try {
      const result = await schema.validateAsync(body);
      return result;
    } catch (error) {
      throwValidationError('Some required fields are missing');
    }
  },
  createToken: (user) => {
    const { email } = user;
    const payload = { data: email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
    return token;
  },
};

module.exports = authService;
