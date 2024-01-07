import React, { useState } from "react";
import ArticleCards from "./ArticleCards";
import "./order.css";
import MainScrollMenu from "./MainScrollMenu";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div>
        <MainScrollMenu onSelectCategory={handleCategoryClick} />
        <ArticleCards category={selectedCategory} />
      </div>
    </>
  );
};

export default Order;
