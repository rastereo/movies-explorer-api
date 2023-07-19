const router = require('express').Router();

const {
  getUserById,
  updateUser,
} = require('../controllers/users');
const {
  updateUserValidator,
} = require('../utils/celebrateValidationConfig');

router.get('/me', getUserById);

router.patch('/me', updateUserValidator, updateUser);

module.exports = router;
