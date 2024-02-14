import React from "react";
import "./main.css";

const MainScrollMenu = ({ onSelectCategory }) => {
  return (
    <div className="mainScrollMenu">
      <button
        aria-label="All Categories"
        onClick={() => onSelectCategory("All")}
        className="buttonCategories"
      >
        All
      </button>
      <button
        aria-label="Special Categories"
        onClick={() => onSelectCategory("Specials")}
        className="buttonCategories"
      >
        Specials
      </button>
      <button
        aria-label="Starters Categories"
        onClick={() => onSelectCategory("Starters")}
        className="buttonCategories"
      >
        Starters
      </button>
      <button
        aria-label="Main Categories"
        onClick={() => onSelectCategory("Main")}
        className="buttonCategories"
      >
        Main
      </button>
      <button
        aria-label="Desserts Categories"
        onClick={() => onSelectCategory("Desserts")}
        className="buttonCategories"
      >
        Desserts
      </button>
      <button
        aria-label="Drinks Categories"
        onClick={() => onSelectCategory("Drinks")}
        className="buttonCategories"
      >
        Drinks
      </button>
    </div>
  );
};

export default MainScrollMenu;
