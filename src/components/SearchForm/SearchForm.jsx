import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React, { useState } from "react";

function SearchForm() {
  const [isSelectShorts, setIsSelectedShorts] = useState(false);
  return (
    <section className="search">
      <form action="" className="search__form">
        <div className="search__form-container">
          <input type="text" className="search__input" placeholder="Фильм" />
          <button className="search__submit-btn">Поиск</button>
        </div>
      </form>
      <div className="search__shorts-container">
        <FilterCheckbox isSelectShorts={isSelectShorts} />
        <p className="search__shorts-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
