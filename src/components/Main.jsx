import React from "react";
import "./main.css";
import FoodImg from "../assets/restauranfood.jpg";

const Main = () => {
  return (
    <main>
      <div className="mainCard">
        <h1 className="mainTitle">Little Lemon</h1>
        <h4 className="mainSubTitle">Restaurant</h4>
        <div className="mainContainer">
          <p className="mainParagraph">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <img className="foodImg" src={FoodImg} alt="foodImg" />
        </div>
        <button className="mainButton">Reserve a table</button>
      </div>
      <div className="menuContainer">
        <h1 className="mainOrderTitle">ORDER FOR DELIVERY!</h1>
        <div className="mainScrollMenu">
          <button>Specials</button>
          <button>Starters</button>
          <button>Main</button>
          <button>Desserts</button>
          <button>Drinks</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
