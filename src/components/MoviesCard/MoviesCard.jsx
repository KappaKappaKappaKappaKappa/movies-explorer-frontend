import { useState } from "react";
import testImg from "../../images/test-pic.png";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const { pathname } = useLocation();

  const [isSavedCard, setIsSavedCard] = useState(false);

  const handleClickSaveBtnCard = () => {
    setIsSavedCard(!isSavedCard);
  };

  return (
    <article className="card">
      <div className="card__info-container">
        <h2 className="card__title">В погоне за Бенкси</h2>
        <p className="card__duration">0ч 42м</p>
      </div>
      <img src={testImg} alt="Картинка карточки" className="card__img" />
      {pathname === "/movies" && !isSavedCard && (
        <button className="card__save-btn" onClick={handleClickSaveBtnCard}>
          Сохранить
        </button>
      )}
      {isSavedCard && (
        <button
          className="card__save-btn_active"
          onClick={handleClickSaveBtnCard}
        ></button>
      )}
      {pathname === "/saved-movies" && (
        <button className="card__delete-btn"></button>
      )}
    </article>
  );
}

export default MoviesCard;
