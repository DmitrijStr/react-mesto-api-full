const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { joiUrlTest } = require('../utils/utils.js');
const {
  getUsers,
  getUser,
  patchUser,
  patchAvatar,
} = require('../controllers/users.js');

usersRouter.get('/', getUsers);

usersRouter.get('/me', celebrate({
  headers: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }).unknown(true),
}), getUser);

usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    about: Joi.string().required(),
  }),
}), patchUser);

usersRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(joiUrlTest),
  }),
}), patchAvatar);

module.exports = usersRouter;
