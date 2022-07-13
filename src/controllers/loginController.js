const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    await loginService.authService.validateBodyLogin(req.body);
  },
};

module.exports = loginController;