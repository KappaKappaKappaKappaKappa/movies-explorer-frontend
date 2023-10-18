function FilterCheckbox({ isSelectShorts }) {
  return (
    <svg
      className="filter-checkbox"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
    >
      <rect
        width="36"
        height="20"
        rx="10"
        fill={isSelectShorts ? "#2BE080" : "#343434"}
      />
      <circle
        cx={isSelectShorts ? "26" : "10"}
        cy="10"
        r="4"
        fill={isSelectShorts ? "white" : "#A0A0A0"}
      />
    </svg>
  );
}

export default FilterCheckbox;
