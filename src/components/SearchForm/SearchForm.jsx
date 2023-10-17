function SearchForm() {
  return (
    <section className="search">
      <form action="" className="search__form">
        <div className="search__form-container">
          <input type="text" className="search__input" placeholder="Фильм" />
          <button className="search__submit-btn">Поиск</button>
        </div>
      </form>
      <div className="search__shorts-container">
        <input
          type="checkbox"
          id="FilterCheckbox"
          name="FilterCheckbox"
          className="search__shorts-checkbox"
        />
        <p className="search__shorts-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
