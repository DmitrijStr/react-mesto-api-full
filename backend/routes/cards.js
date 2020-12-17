const cardsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { joiUrlTest } = require('../utils/utils.js');
const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards.js');

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }).unknown(true),
});

cardsRouter.get('/', getCards);

cardsRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    link: Joi.string().required().custom(joiUrlTest),
  }),
}), createCard);

cardsRouter.delete('/:id', validateId, deleteCard);
cardsRouter.put('/:id/likes/', validateId, putLike);
cardsRouter.delete('/:id/likes/', validateId, deleteLike);

module.exports = cardsRouter;
