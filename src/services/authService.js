const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { throwValidationError, throwUnauthorizedError, throwJsonWebTokenError } = require('./utils');

const authService = {
  validateAuthorization: async (auth) => {
    const schema = Joi.string().required();
    try {
      const token = await schema.validateAsync(auth);
      return token;
    } catch (err) {
      throwUnauthorizedError();
    }
  },
  createToken: (user) => {
    const { password, ...personalData } = user;
    const payload = { data: personalData };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
    return token;
  },
  readToken: (token) => {
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      return data;
    } catch (err) {
      throwJsonWebTokenError('Expired or invalid token');
    }
  },
  validateBodyLogin: async (body) => {
    const schema = Joi.object({
      email: Joi.string().email().max(255).required(),
      password: Joi.string().max(255).required(),
    });
    try {
      const data = await schema.validateAsync(body);
      return data;
    } catch (error) {
      throwValidationError('Some required fields are missing');
    }
  },
  validateCreateUser: async (body) => {
    const schema = Joi.object({
      displayName: Joi.string().min(8).required(),
      email: Joi.string().email().max(255).required(),
      password: Joi.string().min(6).max(255).required(),
      image: Joi.string(),
    });
      const data = await schema.validateAsync(body);
      return data;
  },
};

module.exports = authService;
