const authService = require('../services/authService');
const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const data = await authService.validateCreateUser(req.body);
    await userService.getByEmailOrThrows(data.email);
    await userService.create(data);
    const token = authService.createToken(data);
    res.status(201).json({ token });
  },
};

module.exports = userController;