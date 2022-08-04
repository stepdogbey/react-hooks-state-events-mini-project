import React from "react";

function CategoryFilter({ categories, handleSelect }) {
  function onButtonClick(event) {
    const buttons = document.querySelectorAll("#button");
    buttons.forEach((button) => {
      button.className = "";
      event.target.className = "selected";
    });
    handleSelect(event);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className=""
          onClick={onButtonClick}
          name={category}
          id="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
