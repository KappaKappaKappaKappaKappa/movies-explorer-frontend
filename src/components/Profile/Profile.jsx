import React, { useState, useEffect } from "react";
import currentUserContext from "../../contexts/currentUserContext";
import { updateUserInfo } from "../../utils/MainApi";
import { EMAIL_REGEX } from "../../utils/contains";

function Profile({ handleLogout, setIsSavedMoviesLoaded }) {
  const token = localStorage.getItem("jwt");
  //Подключение контекста currentUser в компонент
  const [currentUser, setCurrentUser] = React.useContext(currentUserContext);

  //Стейт состояния режима редактирования
  const [isRedactorMode, setIsRedactorMode] = useState(false);

  // Стейт состояния кнопки сохранения
  const [buttonSaveActive, setButtonSaveActive] = useState(false);

  //Стейты name и email для отображения данных из контекста
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  //Стейты для проверки инпут полей на валидность
  const [isInputNameValid, setIsInputNameValid] = useState(true);
  const [isInputEmailValid, setIsInputEmailValid] = useState(true);

  // Стейт для состояния сообщения о запросе
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  //Метод для включения режима редактирования при нажатии на кнопку
  const handleClickEditProfile = () => {
    setIsRedactorMode(true);
  };

  //Подгрузка данных пользователя
  useEffect(() => {
    setName(currentUser.data.name);
    setEmail(currentUser.data.email);
  }, [currentUser]);

  //Если инпут и данные сервера совпадают, то кнопка "Сохранить" не активна
  useEffect(() => {
    if (currentUser.data.name !== name || currentUser.data.email !== email) {
      setButtonSaveActive(true);
    } else {
      setButtonSaveActive(false);
    }
  }, [currentUser, name, email]);

  //Обновление стейта name при вводе нового значения name
  const handleNameChange = (e) => {
    const input = e.target;
    setName(input.value);
    setIsInputNameValid(input.validity.valid && input.value);
  };

  //Обновление стейта email при вводе нового значения email
  const handleEmailChange = (e) => {
    const input = e.target;
    setEmail(input.value);
    const checkValidEmail = EMAIL_REGEX.test(input.value);

    setIsInputEmailValid(checkValidEmail);
  };

  //Обработка отправки формы. Посылается запрос на сервер с новыми данными, в ответ получаем объект с обновленными данными. Обновляем стейт name и email, а так же данные пользователя в контексте. Завершаем оработку отключением кнопки сохранения и режима редактирования.
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo({ name: name, email: email }, token)
      .then((userData) => {
        setName(userData.data.name);
        setEmail(userData.data.email);
        setCurrentUser(userData);
        setIsRedactorMode(false);
        setUpdateSuccess(true);
        setUpdateError(false);
        setIsSavedMoviesLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setUpdateError(true);
        setUpdateSuccess(false);
      });
    setButtonSaveActive(false);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${name}!`}</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
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
        <span className="form__input_error">
          {!isInputNameValid ? "Не короче 2 символов" : ""}
        </span>

        <div className="form__container-email">
          <label htmlFor="email" className="form__input-title">
            E-mail
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Тут должен быть ваш email"
            value={email || ""}
            onChange={handleEmailChange}
            name="email"
            disabled={!isRedactorMode}
          />
        </div>
        <span className="form__input_error">
          {!isInputEmailValid ? "С почтой что-то не то..." : ""}
        </span>
        <span
          className={
            updateError
              ? "form__submit-message form__submit-message_error"
              : "form__submit-message"
          }
        >
          {updateSuccess && "Данные успешно обновлены!"}
          {updateError && "Что-то пошло не так..."}
        </span>
        {isRedactorMode && (
          <button
            type="submit"
            disabled={!buttonSaveActive}
            className={
              isInputEmailValid && isInputNameValid && buttonSaveActive
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
