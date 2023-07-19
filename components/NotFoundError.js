const { NOT_FOUND_STATUS } = require('../utils/serverErrorStatusConstants');

class NotFoundError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = NOT_FOUND_STATUS;
  }
}

module.exports = NotFoundError;
