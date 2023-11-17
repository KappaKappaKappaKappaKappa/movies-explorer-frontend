import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { ERROR_NO_CONTENT } from "../../utils/contains";

function MoviesCardList({
  filteredMovies,
  onlyShorts,
  isShorts,
  handleSaveFilm,
  handleDeleteSavedFilm,
  savedMovies,
  isBtnMoreActive,
  maxMoviesVisible,
  maxShortsVisible,
  handleClickShowMoreMoviesBtn,
  handleClickShowMoreShortsBtn,
  isUserMadeRequest,
  isLoading,
}) {
  const { pathname } = useLocation();

  const checkResult = () => {
    if (
      pathname === "/movies" &&
      isUserMadeRequest &&
      !filteredMovies?.length &&
      !isShorts &&
      !isLoading
    ) {
      return ERROR_NO_CONTENT;
    }

    if (
      pathname === "/movies" &&
      isUserMadeRequest &&
      !onlyShorts?.length &&
      isShorts &&
      !isLoading
    ) {
      return ERROR_NO_CONTENT;
    }

    if (pathname === "/saved-movies" && !filteredMovies?.length && !isShorts) {
      return ERROR_NO_CONTENT;
    }

    if (pathname === "/saved-movies" && !onlyShorts?.length && isShorts) {
      return ERROR_NO_CONTENT;
    }
  };

  return (
    <section className="cards-list">
      <div className="cards-list__container">
        {!isLoading && checkResult()}
        {(isShorts ? onlyShorts : filteredMovies)
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
