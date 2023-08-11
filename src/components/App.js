import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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


  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile-edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <label className="form__field">
                <input className="form__item form__item_user_name" type="text" id="name" name="name" value="" placeholder="Имя"
                  minlength="2" maxlength="40" required />
                <span className="form__error" id="name-error"></span>
              </label>

              <label className="form__field">
                <input className="form__item form__item_user_about" type="text" id="about" name="about" value=""
                  placeholder="О себе" minlength="2" maxlength="200" required />
                <span className="form__error" id="about-error"></span>
              </label>
            </>
          }
        />

        <PopupWithForm
          name="avatar-edit"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                className="form__item form__item_avatar-url"
                type="url"
                id="avatar"
                name="link"
                value=""
                placeholder="Ссылка на фотографию"
                required
              />
              <span
                className="form__error form__error_field_avatar"
                id="avatar-error">
              </span>
            </>
          }
        />

        <PopupWithForm
          name="new-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <label class="form__field">
                <input
                  class="form__item form__item_card_name"
                  type="text"
                  id="place"
                  name="name"
                  value=""
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  required
                />
                <span
                  class="form__error form__error_field_place"
                  id="place-error">
                </span>
              </label>

              <label class="form__field">
                <input
                  class="form__item form__item_card_about"
                  type="url"
                  id="link"
                  name="link"
                  value=""
                  placeholder="Ссылка на картинку"
                  minlength="2"
                  required
                />
                <span
                  class="form__error form__error_field_link"
                  id="link-error">
                </span>
              </label>
            </>
          }
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
  );
}

export default App;
