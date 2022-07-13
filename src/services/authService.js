const Joi = require('joi');
const jwt = require('jsonwebtoken');

const authService = {
  validateBodyLogin: async (body) => {
    const schema = Joi.object({
      email: Joi.string().email().max(255).required(),
      password: Joi.string().max(255).required(),
    });
    const result = await schema.validateAsync(body);
    return result;
  },
};

module.exports = authService;