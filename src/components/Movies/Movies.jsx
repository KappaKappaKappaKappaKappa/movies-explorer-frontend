import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { getAllMovies } from "../../utils/MoviesApi";
import { useEffect } from "react";
import { saveMovie, deleteMovie } from "../../utils/MainApi";
import {
  MAXMOVIES_L_SIZE,
  STEP_L_SIZE,
  MAXMOVIES_M_SIZE,
  STEP_M_SIZE,
  MAXMOVIES_S_SIZE,
  STEP_S_SIZE,
} from "../../utils/contains";

function Movies({
  savedMovies,
  setSavedMovies,
  isShorts,
  setIsShorts,
  handleToggleFilter,
  isNoContent,
  setIsNoContent,
}) {
  const token = localStorage.getItem("jwt");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onlyShorts, setOnlyShorts] = useState([]);

  const [isBtnMoreActive, setIsBtnMoreActive] = useState(false);
  const [maxMoviesVisible, setMaxMoviesVisible] = useState(0);
  const [maxShortsVisible, setMaxShortsVisible] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const filteredFilms = localStorage.getItem("filtered-movies");
    if (filteredFilms) {
      setFilteredMovies(JSON.parse(filteredFilms));
    }

    if (filteredFilms && JSON.parse(filteredFilms).length > 0) {
      setIsNoContent(false);
    } else if (!filteredFilms) {
      setIsNoContent(false);
    } else {
      setIsNoContent(true);
    }

    const shortsFilms = localStorage.getItem("shorts-films");
    if (shortsFilms) {
      setOnlyShorts(JSON.parse(shortsFilms));
    }

    const shortsStatus = localStorage.getItem("is-shorts");
    if (shortsStatus) {
      setIsShorts(JSON.parse(shortsStatus));
    }
  }, [setIsNoContent, setIsShorts]);

  const handleSaveFilm = (movie, setIsSavedCard) => {
    saveMovie(movie, token)
      .then((data) => {
        setSavedMovies([data.data, ...savedMovies]);
        setIsSavedCard(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteSavedFilm = (movieId, setIsSavedCard) => {
    const deletedMovie = savedMovies.find((savedMovie) => {
      return savedMovie.movieId === movieId;
    });
    const idDeletedMovie = deletedMovie._id;

    deleteMovie(idDeletedMovie, token)
      .then((res) => {
        setSavedMovies((state) => {
          return state.filter((movie) => {
            return movie._id !== idDeletedMovie;
          });
        });
        setIsSavedCard(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterAndSetState = (movies, keyword) => {
    const filteredFilms = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilteredMovies(filteredFilms);
    localStorage.setItem("filtered-movies", JSON.stringify(filteredFilms));

    const shortsFilms = movies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
        movie.duration <= 40
      );
    });
    setOnlyShorts(shortsFilms);
    localStorage.setItem("shorts-films", JSON.stringify(shortsFilms));

    if (filteredFilms.length < 1) {
      setIsNoContent(true);
    } else {
      setIsNoContent(false);
    }
  };

  const handleSubmitSearchForm = (keyword) => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      filterAndSetState(JSON.parse(storedMovies), keyword);
    } else {
      const getMovies = async () => {
        try {
          setIsLoading(true);
          const data = await getAllMovies();
          localStorage.setItem("movies", JSON.stringify(data));
          filterAndSetState(data, keyword);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getMovies();
    }
  };

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
        setMaxMoviesVisible(MAXMOVIES_L_SIZE);
        setMaxShortsVisible(MAXMOVIES_L_SIZE);
        setStep(STEP_L_SIZE);
      } else if (window.innerWidth > 647) {
        setMaxMoviesVisible(MAXMOVIES_M_SIZE);
        setMaxShortsVisible(MAXMOVIES_M_SIZE);
        setStep(STEP_M_SIZE);
      } else if (window.innerWidth < 648) {
        setMaxMoviesVisible(MAXMOVIES_S_SIZE);
        setMaxShortsVisible(MAXMOVIES_S_SIZE);
        setStep(STEP_S_SIZE);
      }
      console.log(1212);
    };

    handleResize();

    let timeoutId;

    window.addEventListener("resize", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleResize();
      }, 100);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClickShowMoreMoviesBtn = () => {
    setMaxMoviesVisible((prevValue) => prevValue + step);
  };

  const handleClickShowMoreShortsBtn = () => {
    setMaxShortsVisible((prevValue) => prevValue + step);
  };
  return (
    <main className="movies">
      <SearchForm
        handleSubmitSearchForm={handleSubmitSearchForm}
        handleToggleFilter={handleToggleFilter}
        isShorts={isShorts}
      />
      {isLoading && <Preloader />}
      <MoviesCardList
        isBtnMoreActive={isBtnMoreActive}
        filteredMovies={filteredMovies}
        onlyShorts={onlyShorts}
        isShorts={isShorts}
        isNoContent={isNoContent}
        handleSaveFilm={handleSaveFilm}
        handleDeleteSavedFilm={handleDeleteSavedFilm}
        savedMovies={savedMovies}
        maxMoviesVisible={maxMoviesVisible}
        maxShortsVisible={maxShortsVisible}
        handleClickShowMoreMoviesBtn={handleClickShowMoreMoviesBtn}
        handleClickShowMoreShortsBtn={handleClickShowMoreShortsBtn}
      />
    </main>
  );
}

export default Movies;
