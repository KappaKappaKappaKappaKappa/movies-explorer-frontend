import React, { useState, useEffect } from "react";
import currentUserContext from "../../contexts/currentUserContext";
import { updateUserInfo } from "../../utils/MainApi";

function Profile({ handleLogout }) {
  const currentUser = React.useContext(currentUserContext);

  const [isRedactorMode, setIsRedactorMode] = useState(false);

  const [buttonSaveActive, setButtonSaveActive] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameInputError, setNameInputError] = useState("");
  const [emailInputError, setEmailInputError] = useState("");

  const [isInputNameValid, setIsInputNameValid] = useState(false);
  const [isInputEmailValid, setIsInputEmailValid] = useState(false);

  const handleClickEditProfile = () => {
    setIsRedactorMode(true);
  };

  useEffect(() => {
    setName(currentUser.data.name);
    setEmail(currentUser.data.email);
  }, [currentUser]);

  useEffect(() => {
    if (currentUser.data.name !== name || currentUser.data.email !== email) {
      setButtonSaveActive(true);
    } else {
      setButtonSaveActive(false);
    }
  }, [currentUser, name, email]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameInputError(e.target.validationMessage);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailInputError(e.target.validationMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo({ name: name, email: email })
      .then((userData) => {
        setName(userData.data.name);
        setEmail(userData.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
    setButtonSaveActive(false);
    setIsRedactorMode(false);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${name}`}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container-name">
          <label htmlFor="name" className="form__input-title">
            Имя
          </label>
          <input
            className="form__input"
            placeholder="Тут должно быть ваше имя"
            value={name || ""}
            onChange={handleNameChange}
            name="name"
            disabled={!isRedactorMode}
            minLength={2}
            maxLength={25}
          />
        </div>
        <span className="form__input_error">{nameInputError}</span>

        <div className="form__container-email">
          <label htmlFor="email" className="form__input-title">
            E-mail
          </label>
          <input
            type="email"
            className="form__input"
            placeholder="Тут должен быть ваш email"
            value={email || ""}
            onChange={handleEmailChange}
            name="email"
            disabled={!isRedactorMode}
          />
        </div>
        <span className="form__input_error">{emailInputError}</span>
        {isRedactorMode && (
          <button
            type="submit"
            disabled={!buttonSaveActive}
            className={
              buttonSaveActive
                ? "form__submit-btn"
                : "form__submit-btn form__submit-btn_disabled"
            }
          >
            Сохранить
          </button>
        )}
      </form>
      {!isRedactorMode && (
        <div className="profile__btns-container">
          <button
            className="profile__edit-btn"
            onClick={handleClickEditProfile}
          >
            Редактировать
          </button>
          <button className="profile__logout-btn" onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </div>
      )}
    </main>
  );
}

export default Profile;
