const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const cardsRouter = require('./cards.js');
const usersRouter = require('./users.js');
const { login, createUser } = require('../controllers/users.js');
const auth = require('../middlewares/auth.js');
const NotFoundError = require('../errors/not-found-err.js');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().trim().required().min(8),
  }),
}), createUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().trim().required().min(8),
  }),
}), login);

router.use(auth);
router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = router;
