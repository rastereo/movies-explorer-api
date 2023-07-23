const { UNAUTHORIZED_STATUS } = require('../utils/serverErrorStatusConstants');

class UnauthorizedError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = UNAUTHORIZED_STATUS;
  }
}

module.exports = UnauthorizedError;
