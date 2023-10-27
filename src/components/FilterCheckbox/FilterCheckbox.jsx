function FilterCheckbox() {
  return (
    <div className="checkbox">
      <div className="checkbox__item">
        <input type="checkbox" id="toggle" name="check" />
        <label htmlFor="toggle"></label>
      </div>
    </div>
  );
}

export default FilterCheckbox;
