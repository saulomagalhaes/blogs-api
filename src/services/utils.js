const throwNotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

const throwUnauthorizedError = (message = 'Não autorizado') => {
  const err = new Error(message);
  err.name = 'UnauthorizedError';
  throw err;
};

const throwValidationError = (message) => {
  const err = new Error(message);
  err.name = 'ValidationError';
  throw err;
};

module.exports = {
  throwNotFoundError,
  throwUnauthorizedError,
  throwValidationError,
};