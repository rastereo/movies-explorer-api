const router = require('express').Router();

const {
  createUser,
  loginUser,
  logoutUser,
} = require('../controllers/users');
const {
  signUpValidator,
  signInValidator,
} = require('../utils/celebrateValidationConfig');
const auth = require('../middlewares/auth');

router.post('/signup', signUpValidator, createUser);

router.post('/signin', signInValidator, loginUser);

router.get('/signout', logoutUser);

router.use(auth);

module.exports = router;