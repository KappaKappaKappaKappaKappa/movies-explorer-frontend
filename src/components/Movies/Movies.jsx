import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { getAllMovies } from "../../utils/MoviesApi";
import { useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onlyShorts, setOnlyShorts] = useState([]);
  const [isShorts, setIsShorts] = useState(false);

  useEffect(() => {
    const filteredFilms = localStorage.getItem("filtered-movies");
    if (filteredFilms) {
      setFilteredMovies(JSON.parse(filteredFilms));
    }

    const shortsFilms = localStorage.getItem("shorts-films");
    if (shortsFilms) {
      setOnlyShorts(JSON.parse(shortsFilms));
    }

    const shortsStatus = localStorage.getItem("is-shorts");
    if (shortsStatus) {
      setIsShorts(JSON.parse(shortsStatus));
    }

    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    } else {
      const getMovies = async () => {
        try {
          setIsLoading(true);
          const data = await getAllMovies();
          setMovies(data);
          localStorage.setItem("movies", JSON.stringify(data));
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getMovies();
    }
  }, []);

  const handleSubmitSearchForm = (keyword) => {
    if (keyword) {
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
    }
  };

  const handleToggleFilter = () => {
    setIsShorts(!isShorts);
    localStorage.setItem("is-shorts", JSON.stringify(!isShorts));
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
        filteredMovies={filteredMovies}
        onlyShorts={onlyShorts}
        isShorts={isShorts}
      />
    </main>
  );
}

export default Movies;
