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
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const NotFoundError = require('../components/NotFoundError');

router.post('/signup', signUpValidator, createUser);

router.post('/signin', signInValidator, loginUser);

router.get('/signout', logoutUser);

router.use(auth);

router.use('/users', userRoutes);

router.use('/movies', movieRoutes);

router.use((req, res, next) => {
  next(new NotFoundError('Данные по запрошенному пути не найдены.'));
});

module.exports = router;
