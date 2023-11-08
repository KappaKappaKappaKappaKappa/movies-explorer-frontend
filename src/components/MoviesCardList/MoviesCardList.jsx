import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  maxMovies_1280,
  step_1280,
  maxMovies_780,
  step_780,
  maxMovies_320,
  step_320,
} from "../../utils/contains";

function MoviesCardList({ filteredMovies, onlyShorts, isShorts, isNoContent }) {
  const { pathname } = useLocation();
  const [isBtnMoreActive, setIsBtnMoreActive] = useState(false);
  const [maxMoviesVisible, setMaxMoviesVisible] = useState(0);
  const [maxShortsVisible, setMaxShortsVisible] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1133) {
        setMaxMoviesVisible(maxMovies_1280);
        setMaxShortsVisible(maxMovies_1280);
        setStep(step_1280);
      } else if (window.innerWidth > 647) {
        setMaxMoviesVisible(maxMovies_780);
        setMaxShortsVisible(maxMovies_780);
        setStep(step_780);
      } else if (window.innerWidth < 648) {
        setMaxMoviesVisible(maxMovies_320);
        setMaxShortsVisible(maxMovies_320);
        setStep(step_320);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <MoviesCard key={movie.id} movie={movie} />
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
