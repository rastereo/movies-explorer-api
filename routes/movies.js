const router = require('express').Router();

const {
  getMoviesById,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  createMovieValidator,
  deleteMovieValidator,
} = require('../utils/celebrateValidationConfig');

router.get('/', getMoviesById);

router.post('/', createMovieValidator, createMovie);

router.delete('/:movieId', deleteMovieValidator, deleteMovie);

module.exports = router;
