import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  maxMovies_L_SIZE,
  step_L_SIZE,
  maxMovies_M_SIZE,
  step_M_SIZE,
  maxMovies_S_SIZE,
  step_S_SIZE,
} from "../../utils/contains";

function MoviesCardList({
  filteredMovies,
  onlyShorts,
  isShorts,
  isNoContent,
  handleSaveFilm,
  handleDeleteSavedFilm,
  savedMovies,
}) {
  const { pathname } = useLocation();
  const [isBtnMoreActive, setIsBtnMoreActive] = useState(false);
  const [maxMoviesVisible, setMaxMoviesVisible] = useState(0);
  const [maxShortsVisible, setMaxShortsVisible] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const countMovies = filteredMovies.length;
    const countShorts = onlyShorts.length;
    const totalMovies = isShorts ? countShorts : countMovies;

    if (
      (totalMovies > maxShortsVisible && isShorts) ||
      (totalMovies > maxMoviesVisible && !isShorts)
    ) {
      setIsBtnMoreActive(true);
    } else {
      setIsBtnMoreActive(false);
    }
  }, [
    maxMoviesVisible,
    isShorts,
    filteredMovies.length,
    onlyShorts.length,
    maxShortsVisible,
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1133) {
        setMaxMoviesVisible(maxMovies_L_SIZE);
        setMaxShortsVisible(maxMovies_L_SIZE);
        setStep(step_L_SIZE);
      } else if (window.innerWidth > 647) {
        setMaxMoviesVisible(maxMovies_M_SIZE);
        setMaxShortsVisible(maxMovies_M_SIZE);
        setStep(step_M_SIZE);
      } else if (window.innerWidth < 648) {
        setMaxMoviesVisible(maxMovies_S_SIZE);
        setMaxShortsVisible(maxMovies_S_SIZE);
        setStep(step_S_SIZE);
      }
    };

    handleResize();

    const debouncedResize = setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 700);

    return () => {
      clearTimeout(debouncedResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickShowMoreMoviesBtn = () => {
    setMaxMoviesVisible((prevValue) => prevValue + step);
  };

  const handleClickShowMoreShortsBtn = () => {
    setMaxShortsVisible((prevValue) => prevValue + step);
  };

  return (
    <section className="cards-list">
      <div className="cards-list__container">
        {isNoContent && (
          <p className="cards-list__not-found-message">Ничего не найдено!</p>
        )}
        {(isShorts ? onlyShorts : filteredMovies)
          .slice(0, isShorts ? maxShortsVisible : maxMoviesVisible)
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              {...movie}
              handleSaveFilm={handleSaveFilm}
              handleDeleteSavedFilm={handleDeleteSavedFilm}
              savedMovies={savedMovies}
            />
          ))}
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
