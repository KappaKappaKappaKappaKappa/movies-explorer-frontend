import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const [inputValid, setInputValid] = useState(true);

  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setInputValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setInputValid(false);
    }
  };
  return (
    <section className="search">
      <form
        action=""
        className="search__form"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="search__form-container">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            name="movies-search"
            aria-label="Поиск по фильмам"
            required
            onChange={handleChangeInputValue}
          />
          <button className="search__submit-btn" type="submit">
            Поиск
          </button>
        </div>
        <span className="search__input-error">
          {inputValid ? "" : "Нужно ввести ключевое слово"}
        </span>
      </form>
      <div className="search__shorts-container">
        <FilterCheckbox />
        <p className="search__shorts-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
