const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.js');
const NotFoundError = require('../errors/not-found-err.js');
const BadReqestError = require('../errors/bad-reqest.js');
const UnauthorizedError = require('../errors/unauthorized-err.js');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  userModel.find({})
    .then((data) => res.send(data))
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  userModel.findOne({ _id: req.user._id })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new NotFoundError('Нет пользователя с таким id'));
      }
      return next();
    });
};

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => userModel.create({
      email: req.body.email,
      password: hash,
    }))
    .then((user) => res.status(200).send({ data: { _id: user._id, email: user.email } }))
    .catch(() => {
      next(new BadReqestError('Переданы некорректные данные'));
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return userModel.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(() => {
      next(new UnauthorizedError('Переданы некорректные данные'));
    });
};

module.exports.patchUser = (req, res, next) => {
  const { name, about } = req.body;
  console.log(req.user._id);
  userModel.findOneAndUpdate(
    { _id: req.user._id },
    {
      name: `${name}`,
      about: `${about}`,
    },
    {
      new: true,
      runValidators: true,
      // upsert: true,
    },
  )
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadReqestError('Переданы некорректные данные'));
      }
      return next();
    });
};

module.exports.patchAvatar = (req, res, next) => {
  const { avatar } = req.body;
  userModel.findOneAndUpdate(
    { _id: req.user._id },
    {
      avatar: `${avatar}`,
    },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadReqestError('Переданы некорректные данные'));
      }
      return next();
    });
};
