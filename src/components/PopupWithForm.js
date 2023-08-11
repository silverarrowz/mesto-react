import React from "react";

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button 
                className="popup__close-btn" 
                type="button" 
                aria-label="закрыть окно">
                </button>
                
                <h2 className="popup__title">{props.title}</h2>

                <form 
                className={`form form_type_${props.formType}`} 
                name={props.name} 
                noValidate>
                    {props.children}
                    <button 
                    className={`form__save-btn form__save-btn_type_${props.formType}`} 
                    type="submit" 
                    name="popupBtn" 
                    aria-label={props.buttonLabel}>
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;