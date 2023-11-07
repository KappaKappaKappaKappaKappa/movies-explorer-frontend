import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  const { pathname } = useLocation();

  const [isSavedCard, setIsSavedCard] = useState(false);

  const handleClickSaveBtnCard = () => {
    setIsSavedCard(!isSavedCard);
  };

  const converTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const totalMinutes = minutes % 60;
    return `${hours} ч ${totalMinutes} м`;
  };

  return (
    <article className="card">
      <div className="card__info-container">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">{converTime(movie.duration)}</p>
      </div>
      <img
        src={`https://api.nomoreparties.co/${movie.image.url}`}
        alt="Картинка карточки"
        className="card__img"
      />
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
