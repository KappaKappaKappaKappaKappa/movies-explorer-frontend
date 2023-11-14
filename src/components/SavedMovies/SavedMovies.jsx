import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { deleteMovie } from "../../utils/MainApi";

function SavedMovies({
  savedMovies,
  setSavedMovies,
  isShorts,
  setIsShorts,
  handleToggleFilter,
  isNoContent,
  setIsNoContent,
}) {
  const token = localStorage.getItem("jwt");
  const [savedMoviesForRender, setSavedMoviesForRender] = useState([]);
  const [onlyShortsForRender, setOnlyShortsForRender] = useState([]);

  const [originalSavedMovies, setOriginalSavedMovies] = useState([]);

  useEffect(() => {
    setIsShorts(false);
    setIsNoContent(false);
  }, [setIsShorts, setIsNoContent]);

  useEffect(() => {
    setSavedMoviesForRender(savedMovies);

    setOriginalSavedMovies(savedMovies);

    setOnlyShortsForRender(
      savedMovies.filter((movie) => {
        return movie.duration < 40;
      })
    );
  }, []);

  const handleDeleteSavedFilm = (movieId) => {
    deleteMovie(movieId, token)
      .then((res) => {
        setSavedMovies((state) => {
          return state.filter((m) => {
            return m._id !== movieId;
          });
        });

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

    if (filteredSavedFilms.length < 1) {
      setIsNoContent(true);
    } else {
      setIsNoContent(false);
    }

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
        isNoContent={isNoContent}
      />
    </main>
  );
}

export default SavedMovies;
