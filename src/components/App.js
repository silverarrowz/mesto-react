import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="body">
      <div className="page">
    <Header />
    <Main />
    <Footer />


      <section class="popup popup_type_image-preview">
        <div class="popup__image-preview">
          <button class="popup__close-btn" type="button" aria-label="Закрыть окно"></button>

          <figure class="popup__image-block">
            <img class="popup__image" src=" " alt=" " />
            <figcaption class="popup__image-title"></figcaption>
          </figure>

        </div>
      </section>


      <template class="element-template">
        <div class="element">
          <img class="element__image" src=" " alt="" />
          <button class="element__remove" type="button" aria-label="Удалить карточку"></button>
          <div class="element__info">
            <h2 class="element__title"></h2>
            <div class="element__like-group">
              <button class="element__like" type="button" aria-label="Поставить лайк"></button>
              <p class="element__like-count"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
    </div>
  );
}

export default App;
