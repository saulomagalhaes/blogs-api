const errors = {
  ValidationError: 400,
  UnauthorizedError: 401,
  NotFoundError: 404,
  SequelizeUniqueConstraintError: 409,
  JsonWebTokenError: 401,
  Conflict: 409,
};

const errorHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};

module.exports = errorHandler;