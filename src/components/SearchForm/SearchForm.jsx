import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form action="" className="search__form">
        <div className="search__form-container">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            id="movies-search"
            aria-label="Поиск по фильмам"
          />
          <button className="search__submit-btn" type="submit">
            Поиск
          </button>
        </div>
      </form>
      <div className="search__shorts-container">
        <FilterCheckbox />
        <p className="search__shorts-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
