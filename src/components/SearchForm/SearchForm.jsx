import React, { useState } from "react";
import { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ handleSubmitSearchForm, handleToggleFilter, isShorts }) {
  const [inputValid, setInputValid] = useState(true);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const keyword = localStorage.getItem("keyword");
    if (keyword) {
      setInputValue(keyword);
    }
  }, []);

  const handleChangeInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setInputValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setInputValid(false);
    } else {
      handleSubmitSearchForm(inputValue);
      localStorage.setItem("keyword", inputValue);
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
            value={inputValue || ""}
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
        <FilterCheckbox
          isShorts={isShorts}
          handleToggleFilter={handleToggleFilter}
        />
        <p className="search__shorts-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
