import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { deleteMovie } from "../../utils/MainApi";
import { getSavedMovies } from "../../utils/MainApi";
import currentUserContext from "../../contexts/currentUserContext";

function SavedMovies({
  savedMovies,
  setSavedMovies,
  isShorts,
  setIsShorts,
  handleToggleFilter,
}) {
  const [currentUser] = React.useContext(currentUserContext);

  const token = localStorage.getItem("jwt");
  const [savedMoviesForRender, setSavedMoviesForRender] = useState([]);
  const [onlyShortsForRender, setOnlyShortsForRender] = useState([]);

  const [originalSavedMovies, setOriginalSavedMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsShorts(false);
  }, [setIsShorts]);

  useEffect(() => {
    getSavedMovies(token)
      .then((data) => {
        setIsLoading(true);
        const ownSavedMovies = data.data.filter((movie) => {
          return movie.owner === currentUser.data._id;
        });
        setSavedMovies(ownSavedMovies);
        setSavedMoviesForRender(ownSavedMovies);

        setOriginalSavedMovies(ownSavedMovies);

        setOnlyShortsForRender(
          ownSavedMovies.filter((movie) => {
            return movie.duration < 40;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDeleteSavedFilm = (movieId) => {
    deleteMovie(movieId, token)
      .then(() => {
        const newSavedMovies = savedMovies.filter((movie) => {
          return movie._id !== movieId;
        });
        setSavedMovies(newSavedMovies);

        setSavedMoviesForRender((state) => {
          return state.filter((m) => {
            return m._id !== movieId;
          });
        });

        setOnlyShortsForRender((state) => {
          return state.filter((s) => {
            return s._id !== movieId;
          });
        });

        setOriginalSavedMovies((state) => {
          return state.filter((m) => {
            return m._id !== movieId;
          });
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitSearchForm = (keyword) => {
    const filteredSavedFilms = originalSavedMovies.filter((film) => {
      return film.nameRU.toLowerCase().includes(keyword.toLowerCase());
    });
    setSavedMoviesForRender(filteredSavedFilms);

    const filteredSavedShorts = originalSavedMovies.filter((short) => {
      return (
        short.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
        short.duration <= 40
      );
    });
    setOnlyShortsForRender(filteredSavedShorts);
  };

  return (
    <main className="saved-movies">
      <SearchForm
        handleSubmitSearchForm={handleSubmitSearchForm}
        isShorts={isShorts}
        handleToggleFilter={handleToggleFilter}
      />
      <MoviesCardList
        filteredMovies={savedMoviesForRender}
        onlyShorts={onlyShortsForRender}
        handleDeleteSavedFilm={handleDeleteSavedFilm}
        isShorts={isShorts}
        isLoading={isLoading}
      />
    </main>
  );
}

export default SavedMovies;
