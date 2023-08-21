import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";

import api from "../utils/api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsData()])
      .then(([userInfo, cardsData]) => {
        setCurrentUser(userInfo);
        setCards(cardsData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupWithImageOpen(false);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsPopupWithImageOpen(true);
  }

  function handleCardDeleteClick(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleCardLikeClick(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeStatus(card._id, !isLiked)
      .then((cardLiked) => {
        setCards(cards.map((c) => c._id === card._id ? cardLiked : c));
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleUpdateUser(data) {
    api.editProfile(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleUpdateAvatar(link) {
    api.updateAvatar(link)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleAddPlaceSubmit(data) {
    api.createCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            cards={cards}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLikeClick={handleCardLikeClick}
            onCardDeleteClick={handleCardDeleteClick}
          />
          <Footer />

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
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <PopupWithForm
            name='card-delete'
            title='Вы уверены?'
            buttonText='Да'
            isOpen={false}
            onClose={closeAllPopups}
          />

          <ImagePopup
            card={selectedCard}
            isOpen={isPopupWithImageOpen}
            onClose={closeAllPopups}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
