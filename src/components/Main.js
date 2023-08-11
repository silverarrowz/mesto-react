import React from "react";

function Main() {
  

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__personal">
          <button className="profile__edit-avatar-btn">
            <img className="profile__avatar" src="/" alt="Аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__info-group">
              <h1 className="profile__name"></h1>
              <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"></button>
            </div>
            <p className="profile__about"></p>
          </div>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить карточку"></button>
      </section>

      <section className="elements">
      </section>
    </main>
  )
}

export default Main;