const cardsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards.js');

const validateId = celebrate({
  headers: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }).unknown(true),
});

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCard);
cardsRouter.delete('/:id', validateId, deleteCard);
cardsRouter.put('/likes/:id', validateId, putLike);
cardsRouter.delete('/likes/:id', validateId, deleteLike);

module.exports = cardsRouter;
