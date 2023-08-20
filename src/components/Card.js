import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `element__like ${isLiked && 'element__like_active'}`
    );;


    function handleClick() {
        props.onClick(props.card);
    }

    function handleDeleteClick() {
        props.onDeleteClick(props.card);
    }

    function handleLikeClick() {
        props.onLikeClick(props.card);
    }

    return (
        <div className="element">
            <img
                className="element__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick} />

            {isOwn && <button
                className="element__remove"
                type="button"
                aria-label="Удалить карточку"
                onClick={handleDeleteClick} />}


            <div className="element__info">
                <h2 className="element__title">
                    {props.card.name}
                </h2>
                <div className="element__like-group">
                    <button
                        className="element__like"
                        type="button"
                        aria-label="Поставить лайк" />
                    <p className="element__like-count">
                        {props.card.likes.length}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;