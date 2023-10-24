import MoviesCard from "../MoviesCard/MoviesCard";

import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const { pathname } = useLocation();
  return (
    <section className="cards-list">
      <div className="cards-list__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
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
