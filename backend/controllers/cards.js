const cardModel = require('../models/card.js');
const NotFoundError = require('../errors/not-found-err.js');
const BadReqestError = require('../errors/bad-reqest.js');
const ForbiddenError = require('../errors/forbidden-err.js');

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
  cardModel.findById(req.params.id)
    .then((card) => {
      if (card.owner.equals(req.user._id)) {
        return cardModel.findByIdAndRemove(req.params.id)
          .then(() => res.send({ message: 'deleted' }));
      }
      return next(new ForbiddenError('Forbidden'));
    })
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
    .then((card) => {
      if (!card) {
        return next(new NotFoundError('Нет карточки с таким id'));
      }
      return res.send(card);
    })
    .catch(() => next());
};

module.exports.deleteLike = (req, res, next) => {
  cardModel.findByIdAndUpdate(req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        return next(new NotFoundError('Нет карточки с таким id'));
      }
      return res.send(card);
    })
    .catch(() => next());
};
