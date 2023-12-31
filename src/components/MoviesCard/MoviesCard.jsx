import { useLocation } from "react-router-dom";

function MoviesCard({
  handleSaveFilm,
  handleDeleteSavedFilm,
  savedMovies,
  ...props
}) {
  const { pathname } = useLocation();

  const converTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const totalMinutes = minutes % 60;
    return `${hours}ч ${totalMinutes}м`;
  };

  const isSavedCard = savedMovies && savedMovies.some((film) => film.movieId === props.id);

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
  };

  const handleClickRemoveBtnCard = () => {
    handleDeleteSavedFilm(props.id || props._id);
  };

  return (
    <article className="card">
      <div className="card__info-container">
        <h2 className="card__title">{props.nameRU}</h2>
        <p className="card__duration">{converTime(props.duration)}</p>
      </div>
      <a
        className="card__link"
        href={props.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <img
          src={
            pathname === "/saved-movies"
              ? props.image
              : `https://api.nomoreparties.co/${props.image.url}`
          }
          alt={`Постер фильма ${props.nameRU}`}
          className="card__img"
        />
      </a>
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