const Movie = require('../models/movie');
const NotFoundError = require('../components/NotFoundError');
const BadRequestError = require('../components/BadRequestError');
const ForbiddenError = require('../components/ForbiddenError');

const getMoviesById = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .orFail(() => new NotFoundError('Фильмы не найдены.'))
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user._id,
  })
    .then((movie) => res.status(201).send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при сохранении фильма.'));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => new NotFoundError('Фильм с указанным id не существует.'))
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        return Promise.reject(new ForbiddenError('Попытка удалить чужой фильм.'));
      }

      return Movie.deleteOne(movie)
        .then((deleted) => res.send({ deleted, data: movie }));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректный id для удаления фильма.'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMoviesById,
  createMovie,
  deleteMovie,
};
