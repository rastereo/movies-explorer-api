const { CONFLIICT_STATUS } = require('../utils/serverErrorStatusConstants');

class ConflictError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = CONFLIICT_STATUS;
  }
}

module.exports = ConflictError;
