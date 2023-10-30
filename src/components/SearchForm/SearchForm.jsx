import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const [errorMessage, setErrorMessage] = useState("sdafsd");
  return (
    <section className="search">
      <form action="" className="search__form">
        <div className="search__form-container">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            name="movies-search"
            aria-label="Поиск по фильмам"
            required
          />
          <button className="search__submit-btn" type="submit">
            Поиск
          </button>
        </div>
        <span className="search__input-error">{errorMessage}</span>
      </form>
      <div className="search__shorts-container">
        <FilterCheckbox />
        <p className="search__shorts-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
