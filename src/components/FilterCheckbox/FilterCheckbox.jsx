function FilterCheckbox({ isShorts, handleToggleFilter }) {
  return (
    <div className="checkbox">
      <div className="checkbox__item">
        <input
          type="checkbox"
          id="toggle"
          name="check"
          checked={isShorts}
          onChange={handleToggleFilter}
        />
        <label htmlFor="toggle"></label>
      </div>
    </div>
  );
}

export default FilterCheckbox;
