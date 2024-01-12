import React, { useState } from "react";
import ArticleCards from "../Main/ArticleCards";
import "./order.css";
import MainScrollMenu from "../Main/MainScrollMenu";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="orderContainer">
        <MainScrollMenu onSelectCategory={handleCategoryClick} />
        <ArticleCards category={selectedCategory} />
      </div>
    </>
  );
};

export default Order;
