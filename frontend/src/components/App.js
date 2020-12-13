import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/Api'
import Register from './Register';
import Login from './Login';
import { register, authorize, getContent, getInitialCards, postCard, patchUserInfo, patchAvatar, putLike, removeLike, deleteCard } from '../auth';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory();
  const [token, setToken] = useState('')

  useEffect(_ => {
    tokenCheck()
  }, [])

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpen, setCardPopupOpen] = useState(false)
  const [currentUser, setcurrentUser] = useState({})
  const [cards, getCards] = useState([])
  const [infoTooltipState, setInfoTooltipState] = useState({
    message: '',
    success: Boolean,
    open: false
  });


  const getCardsState = (token) => {
    getInitialCards(token)
      .then((data) => {
        const items = data.map((el) => ({
          _id: el._id,
          name: el.name,
          link: el.link,
          likes: el.likes,
          owner: el.owner
        }))
        getCards(items);
      })
      .catch(err => console.log(err))
  }

  // useEffect(() => {
  //   api.getInitialCards()
  //     .then((data) => {
  //       const items = data.map((el) => ({
  //         _id: el._id,
  //         name: el.name,
  //         link: el.link,
  //         likes: el.likes,
  //         owner: el.owner
  //       }))
  //       getCards(items);
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  function handleCardClick(card) {
    setCardPopupOpen(true)
    setSelectedCard(card)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditProfilePopupOpen(false)
    setCardPopupOpen(false)
    setInfoTooltipState({
      open: false
    })
  }

  function handleCardDelete(id) {
    deleteCard(token, id)
      .then(() => {
        getCards(cards.filter(card => card._id !== id))
      })
      .catch(err => console.log(err))
  }

  function handleCardDislike(id) {
    removeLike(token, id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === id ? newCard : c);
        getCards(newCards);
      })
      .catch(err => console.log(err))
  }

  function handleCardLike(id) {
    putLike(token, id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === id ? newCard : c);
        getCards(newCards);
      })
      .catch(err => console.log(err))
  }

  function handleUpdateUser(newData) {
    patchUserInfo(token, newData)
      .then((data) => {
        console.log(data)
        setcurrentUser(data)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(newAvatar) {
    patchAvatar(token, newAvatar)
      .then((data) => {
        console.log(data)
        setcurrentUser(data)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit(newCard) {
    postCard(token, newCard)
      .then((data) => {
        console.log(data)
        getCards([...cards, data]);
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  const handleLogin = (email, password) => {
    authorize(email, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token)
          tokenCheck()
        }
      })
      .catch(err => console.error(err))
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setcurrentUser({})
    setLoggedIn(false)
    setToken(null)
  }

  const handleRegister = (email, password) => {
    register(email, password)
      .then(data => {
        console.log(data)
        if (data.data._id) {
          setInfoTooltipState({
            message: 'Вы успешно зарегистрировались!',
            success: true,
            open: true
          })
          history.push('/sign-in')
        }
      })
      .catch(err => {
        console.log(err)
        setInfoTooltipState({
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
          success: false,
          open: true
        })
      })
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setToken(jwt)
      getContent(jwt)
        .then((res) => {
          console.log(res)
          if (res.data.email) {
            setcurrentUser(res.data)
            setLoggedIn(true)
            history.push('/')
            getCardsState(jwt)
          }
        }).catch(err => {
          localStorage.removeItem('jwt')
          console.error(err)
        })
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className="page__content">
          <Header
            loggedIn={loggedIn}

            logout={handleLogout}
          />
          <Switch>
            <Route exact path="/sign-in">
              <Login handleLogin={handleLogin} />
            </Route>
            <Route exact path="/sign-up">
              <Register handleRegister={handleRegister} />
            </Route>
            <ProtectedRoute exact path="/"
              loggedIn={loggedIn}
              component={Main}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onCardDislike={handleCardDislike}
              cards={cards}
            />
          </Switch>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ImagePopup
            card={selectedCard}
            isOpen={isCardPopupOpen}
            onClose={closeAllPopups}
          />
          <InfoTooltip
            onClose={closeAllPopups}
            renderState={infoTooltipState}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;