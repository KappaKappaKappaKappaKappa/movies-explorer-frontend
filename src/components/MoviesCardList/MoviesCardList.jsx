import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isSavedMovies }) {
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
      {!isSavedMovies && (
        <div className="cards-list__btn-container">
          <button className="cards-list__btn-more">Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
