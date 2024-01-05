import React from "react";
import ArticleCards from "./ArticleCards";
import "./order.css";

const Order = () => {
  return (
    <>
      <div>
        <h1 className="orderTitle">Orders for delivery!</h1>
      </div>
      <div>
        <ArticleCards />
      </div>
    </>
  );
};

export default Order;
