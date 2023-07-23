const { BAD_REQUEST_STATUS } = require('../utils/serverErrorStatusConstants');

class BadRequestError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = BAD_REQUEST_STATUS;
  }
}

module.exports = BadRequestError;
