const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const NotFoundError = require('../components/NotFoundError');
const BadRequestError = require('../components/BadRequestError');
const ConflictError = require('../components/ConflictError');

const {
  NODE_ENV = 'default',
  JWT_SECRET = 'default',
  JWT_DEV_SECRET = 'default',
} = process.env;

const createUser = (req, res, next) => {
  bcrypt.hash(String(req.body.password), 10)
    .then((hash) => User.create({
      ...req.body,
      password: hash,
    }))
    .then((user) => res.status(201).send({ data: user.toJSON() }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при создании пользователя.'));
      } else if (err.code === 11000) {
        next(new ConflictError('При регистрации указан email, который уже существует на сервере.'));
      } else {
        next(err);
      }
    });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV_SECRET,
        { expiresIn: '7d' },
      );

      res
        .cookie('jwt', token, {
          maxAge: 604800000,
          sameSite: true,
          secure: true,
          httpOnly: true,
        })
        .send({ data: user });
    })
    .catch(next);
};

const logoutUser = (req, res) => {
  res
    .clearCookie('jwt')
    .send({ message: 'Выход' });
};

const getUserById = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundError('Пользователя с указанным id не существует.'))
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  getUserById,
};
