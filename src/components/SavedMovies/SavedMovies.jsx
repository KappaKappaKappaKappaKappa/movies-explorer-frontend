import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ isSavedMovies }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} />
    </section>
  );
}

export default SavedMovies;
