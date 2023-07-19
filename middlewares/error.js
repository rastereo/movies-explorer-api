const { INTERNAL_SERVER_ERROR_STATUS } = require('../utils/serverErrorStatusConstants');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || INTERNAL_SERVER_ERROR_STATUS;

  const message = statusCode === INTERNAL_SERVER_ERROR_STATUS
    ? `На сервере произошла ошибка: ${err.message}`
    : err.message;

  res.status(statusCode).send({ message });

  next();
};

module.exports = {
  errorHandler,
};
