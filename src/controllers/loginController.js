const authService = require('../services/authService');
const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const data = await authService.validateBodyLogin(req.body);
    const user = await loginService.getByEmailOrThrows(data.email);
    await loginService.verifyUserPassword(data.password, user.password);
    const token = authService.createToken(user);
    res.status(200).json({ token });
  },
};

module.exports = loginController;