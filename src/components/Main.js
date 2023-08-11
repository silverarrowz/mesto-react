import React, { useState, useEffect } from "react";
import api from "../utils/api";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsData()])
      .then(([userInfo, cardsData]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cardsData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__personal">
          <button
            className="profile__edit-avatar-btn"
            onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар" />
          </button>

          <div className="profile__info">
            <div className="profile__info-group">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                aria-label="Редактировать профиль"
                onClick={props.onEditProfile}>
              </button>

            </div>
            <p className="profile__about">
              {userDescription}
            </p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <div className="element" key={card._id}>
            <img className="element__image" src={card.link} alt={card.name} />
            <button
              className="element__remove"
              type="button"
              aria-label="Удалить карточку"
            ></button>
            <div className="element__info">
              <h2 className="element__title">{card.name}</h2>
              <div className="element__like-group">
                <button
                  className="element__like"
                  type="button"
                  aria-label="Поставить лайк"
                ></button>
                <p className="element__like-count">{card.likes.length}</p>
              </div>
            </div>
          </div>
        ))}
      </section>


    </main>
  )
}

export default Main;