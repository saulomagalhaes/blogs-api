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
  getByAllPostsUsersAndCategories: async (req, res) => {
    const token = await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(token);
    const data = await postService.getByAllPostsUsersAndCategories();
    res.status(200).json(data);
  },
  getPostById: async (req, res) => {
    const token = await authService.validateAuthorization(req.headers.authorization);
    await authService.readToken(token);
    const { id } = req.params;
    const data = await postService.getPostById(id);
    res.status(200).json(data);
  },
  update: async (req, res) => {
    const editedPost = await authService.validateUpdatePost(req.body);
    const token = await authService.validateAuthorization(req.headers.authorization);
    const { id: idToken } = await authService.readToken(token);
    const { id } = req.params;
    await postService.checkPostUserId(id, idToken);
    const post = await postService.update(id, editedPost);
    res.status(200).json(post);
  },
};

module.exports = postController;