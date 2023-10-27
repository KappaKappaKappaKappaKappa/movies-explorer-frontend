import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [isRedactorMode, setIsRedactorMode] = useState(false);

  const handleClickEditProfile = () => {
    setIsRedactorMode(true);
  };

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="form">
        <div className="form__container-name">
          <p className="form__input-title">Имя</p>
          <input
            className="form__input"
            placeholder="Виталий"
            disabled={!isRedactorMode}
          />
        </div>
        <div className="form__container-email">
          <p className="form__input-title">E-mail</p>
          <input
            className="form__input"
            placeholder="pochta@yandex.ru"
            disabled={!isRedactorMode}
          />
        </div>
        <span className="form__error-message"></span>
        {isRedactorMode && (
          <button className="form__submit-btn">Сохранить</button>
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
          <Link to="/signin" className="profile__logout-btn">
            Выйти из аккаунта
          </Link>
        </div>
      )}
    </main>
  );
}

export default Profile;
