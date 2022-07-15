const authService = require('../services/authService');
const postService = require('../services/postService');

const postController = {
  create: async (req, res) => {
    const data = await authService.validateCreatePost(req.body);
    const token = await authService.validateAuthorization(req.headers.authorization);
    const { id } = await authService.readToken(token);
    const post = await postService.create(id, data);
    res.status(201).json(post);
  },
};

module.exports = postController;