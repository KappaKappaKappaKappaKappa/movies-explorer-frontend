import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </>
  );
}

export default Movies;
