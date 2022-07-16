const throwNotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

const throwUnauthorizedError = (message = 'Unauthorized user') => {
  const err = new Error(message);
  err.name = 'UnauthorizedError';
  throw err;
};

const throwValidationError = (message) => {
  const err = new Error(message);
  err.name = 'ValidationError';
  throw err;
};

const throwConflictError = (message) => {
  const err = new Error(message);
  err.name = 'Conflict';
  throw err;
};

const throwJsonWebTokenError = (message) => {
  const err = new Error(message);
  err.name = 'JsonWebTokenError';
  throw err;
};

module.exports = {
  throwNotFoundError,
  throwUnauthorizedError,
  throwValidationError,
  throwConflictError,
  throwJsonWebTokenError,
};