import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { deleteMovie } from "../../utils/MainApi";

function SavedMovies({
  isLoggedIn,
  savedMovies,
  setSavedMovies,
  isShorts,
  setIsShorts,
}) {
  const [savedMoviesForRender, setSavedMoviesForRender] = useState(savedMovies);
  const [onlyShortsForRender, setOnlyShortsForRender] = useState([]);

  useEffect(() => {
    setSavedMoviesForRender(savedMovies);
  }, [savedMovies]);

  const handleDeleteSavedFilm = (movieId) => {
    deleteMovie(movieId)
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (movies, keyword) => {
    const filteredSavedFilms = movies.filter((film) => {
      return film.nameRU.toLowerCase().includes(keyword.toLowerCase());
    });
    setSavedMoviesForRender(filteredSavedFilms);

    const filteredSavedShorts = movies.filter((short) => {
      return (
        short.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
        short.duration <= 40
      );
    });
    setOnlyShortsForRender(filteredSavedShorts);
  };

  return (
    <main className="saved-movies">
      <SearchForm submitHandler={submitHandler} />
      <MoviesCardList
        savedMoviesForRender={savedMoviesForRender}
        onlyShortsForRender={onlyShortsForRender}
        handleDeleteSavedFilm={handleDeleteSavedFilm}
      />
    </main>
  );
}

export default SavedMovies;
