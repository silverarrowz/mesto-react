import React from "react";

function Card(props) {

    function handleClick() {
        props.onClick(props.card);
    }

    return (
        <div className="element">
            <img
                className="element__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick} />
            <button
                className="element__remove"
                type="button"
                aria-label="Удалить карточку">
            </button>
            <div className="element__info">
                <h2 className="element__title">
                    {props.card.name}
                </h2>
                <div className="element__like-group">
                    <button
                        className="element__like"
                        type="button"
                        aria-label="Поставить лайк">
                    </button>
                    <p className="element__like-count">
                        {props.card.likes.length}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;