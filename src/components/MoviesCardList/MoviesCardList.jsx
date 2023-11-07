import MoviesCard from "../MoviesCard/MoviesCard";

import { useLocation } from "react-router-dom";

function MoviesCardList({ filteredMovies, onlyShorts, isShorts }) {
  const { pathname } = useLocation();
  return (
    <section className="cards-list">
      <div className="cards-list__container">
        {!isShorts &&
          filteredMovies.map((movie) => {
            return <MoviesCard key={movie.id} movie={movie} />;
          })}
        {isShorts &&
          onlyShorts.map((movie) => {
            return <MoviesCard key={movie.id} movie={movie} />;
          })}
      </div>
      {pathname === "/movies" && (
        <div className="cards-list__btn-container">
          <button className="cards-list__btn-more">Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
