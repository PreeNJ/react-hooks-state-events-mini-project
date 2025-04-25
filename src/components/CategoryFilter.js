import React, { useState } from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  // local selection state so standalone tests can click and highlight
  const [selected, setSelected] = useState("All");

  function handleClick(cat) {
    setSelected(cat);
    if (onSelectCategory) onSelectCategory(cat);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selected ? "selected" : ""}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
