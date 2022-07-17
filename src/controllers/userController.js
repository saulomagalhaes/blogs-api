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
  getAllUsers: async (req, res) => {
    const token = await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(token);
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  },
  getById: async (req, res) => {
    const token = await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(token);
    const user = await userService.getById(req.params.id);
    res.status(200).json(user);
  },
  delete: async (req, res) => {
    const token = await authService.validateAuthorization(req.headers.authorization);
    const { id } = await authService.readToken(token);
    await userService.delete(id);
    res.sendStatus(204);
  },
};

module.exports = userController;