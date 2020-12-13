const cardModel = require('../models/card.js');
const NotFoundError = require('../errors/not-found-err.js');
const BadReqestError = require('../errors/bad-reqest.js');

module.exports.getCards = (req, res, next) => {
  cardModel.find({})
    .then((data) => res.send(data))
    .catch(() => {
      next();
    });
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  cardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch(() => {
      next(new BadReqestError('Переданы некорректные данные'));
    });
};

module.exports.deleteCard = (req, res, next) => {
  cardModel.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'deleted' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new NotFoundError('Нет карточки с таким id'));
      }
      return next();
    });
};

module.exports.putLike = (req, res, next) => {
  cardModel.findByIdAndUpdate(req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new NotFoundError('Нет карточки с таким id'));
      }
      return next();
    });
};

module.exports.deleteLike = (req, res, next) => {
  cardModel.findByIdAndUpdate(req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .orFail(() => new Error('NotFound'))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new NotFoundError('Нет карточки с таким id'));
      }
      return next();
    });
};
