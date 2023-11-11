import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({
  handleSaveFilm,
  handleDeleteSavedFilm,
  savedMovies,
  ...props
}) {
  const { pathname } = useLocation();
  const [isSavedCard, setIsSavedCard] = useState(false);

  useEffect(() => {
    if (
      savedMovies &&
      savedMovies.some((film) => {
        return film.movieId === props.id;
      })
    ) {
      setIsSavedCard(true);
    } else {
      setIsSavedCard(false);
    }
  }, [savedMovies, props.id]);

  const converTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const totalMinutes = minutes % 60;
    return `${hours}ч ${totalMinutes}м`;
  };

  const handleClickSaveBtnCard = () => {
    const movieData = {
      country: props.country,
      director: props.director,
      duration: props.duration,
      year: props.year,
      description: props.description,
      image: `https://api.nomoreparties.co/${props.image.url}`,
      trailerLink: props.trailerLink,
      nameRU: props.nameRU || props.nameEN,
      nameEN: props.nameEN || props.nameRU,
      thumbnail: `https://api.nomoreparties.co/${props.image.formats.thumbnail.url}`,
      movieId: props.id,
    };
    handleSaveFilm(movieData);
    setIsSavedCard(true);
  };

  const handleClickRemoveBtnCard = () => {
    handleDeleteSavedFilm(props.id || props._id);
    setIsSavedCard(false);
  };

  return (
    <article className="card">
      <div className="card__info-container">
        <h2 className="card__title">{props.nameRU}</h2>
        <p className="card__duration">{converTime(props.duration)}</p>
      </div>
      <img
        src={
          pathname === "/saved-movies"
            ? props.image
            : `https://api.nomoreparties.co/${props.image.url}`
        }
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
          onClick={handleClickRemoveBtnCard}
        ></button>
      )}
      {pathname === "/saved-movies" && (
        <button
          className="card__delete-btn"
          onClick={handleClickRemoveBtnCard}
        ></button>
      )}
    </article>
  );
}

export default MoviesCard;
