import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { getAllMovies } from "../../utils/MoviesApi";
import { useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState();

  const handleSubmitSearchForm = () => {
    const storedMovies = localStorage.getItem("movies");
    if (!storedMovies) {
      getAllMovies().then((data) => {
        localStorage.setItem("movies", data);
      });
    }
    console.log(localStorage);
  };

  return (
    <main className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </main>
  );
}

export default Movies;
