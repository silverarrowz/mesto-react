import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

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
                onClick={props.onEditProfile} />
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
          onClick={props.onAddPlace} />
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card 
          key={card._id} 
          card={card}
          onClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;