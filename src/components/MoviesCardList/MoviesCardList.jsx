import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  filteredMovies,
  onlyShorts,
  isShorts,
  isNoContent,
  handleSaveFilm,
  handleDeleteSavedFilm,
  savedMovies,
  isBtnMoreActive,
  maxMoviesVisible,
  maxShortsVisible,
  handleClickShowMoreMoviesBtn,
  handleClickShowMoreShortsBtn,
}) {
  const { pathname } = useLocation();

  return (
    <section className="cards-list">
      <div className="cards-list__container">
        {isNoContent && (
          <p className="cards-list__not-found-message">Ничего не найдено!</p>
        )}
        {(isShorts
          ? onlyShorts
          : filteredMovies
        )
          .slice(0, isShorts ? maxShortsVisible : maxMoviesVisible)
          .map((movie) => {
            return (
              <MoviesCard
                key={movie.id || movie._id}
                {...movie}
                handleSaveFilm={handleSaveFilm}
                handleDeleteSavedFilm={handleDeleteSavedFilm}
                savedMovies={savedMovies}
              />
            );
          })}
      </div>
      {pathname === "/movies" && isBtnMoreActive && (
        <div className="cards-list__btn-container">
          <button
            className="cards-list__btn-more"
            onClick={
              isShorts
                ? handleClickShowMoreShortsBtn
                : handleClickShowMoreMoviesBtn
            }
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
