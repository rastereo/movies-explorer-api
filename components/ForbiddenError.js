const { FORBIDDEN_STATUS } = require('../utils/serverErrorStatusConstants');

class ForbiddenError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = FORBIDDEN_STATUS;
  }
}

module.exports = ForbiddenError;
