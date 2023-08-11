import React from "react";

function PopupWithImage () {
    return (
        <section className="popup popup_type_image-preview">
          <div className="popup__image-preview">
            <button className="popup__close-btn" type="button" aria-label="Закрыть окно"></button>
            <figure className="popup__image-block">
              <img className="popup__image" src=" " alt=" " />
              <figcaption className="popup__image-title"></figcaption>
            </figure>
          </div>
        </section>
    )
}

export default PopupWithImage;