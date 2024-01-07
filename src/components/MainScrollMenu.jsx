import React from "react";

const MainScrollMenu = ({ onSelectCategory }) => {
  return (
    <div className="mainScrollMenu">
      <button
        onClick={() => onSelectCategory("All")}
        className="buttonCategories"
      >
        All
      </button>
      <button
        onClick={() => onSelectCategory("Specials")}
        className="buttonCategories"
      >
        Specials
      </button>
      <button
        onClick={() => onSelectCategory("Starters")}
        className="buttonCategories"
      >
        Starters
      </button>
      <button
        onClick={() => onSelectCategory("Main")}
        className="buttonCategories"
      >
        Main
      </button>
      <button
        onClick={() => onSelectCategory("Desserts")}
        className="buttonCategories"
      >
        Desserts
      </button>
      <button
        onClick={() => onSelectCategory("Drinks")}
        className="buttonCategories"
      >
        Drinks
      </button>
    </div>
  );
};

export default MainScrollMenu;
