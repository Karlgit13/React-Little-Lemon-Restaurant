import React from "react";
import "./main.css";
import FoodImg from "../assets/restauranfood.jpg";
import ArticleCards from "./ArticleCards";
import marioAndAdrian1 from "../assets/Mario and Adrian A.jpg";
import marioAndAdrian2 from "../assets/Mario and Adrian b.jpg";
import restaurantChef from "../assets/restaurant chef B.jpg";
import restaurantImg from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";

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
          <img className="mobileImg" src={FoodImg} alt="mobileImg" />
        </div>
        <div className="desktopImgContainer">
          <img className="desktopImg1" src={marioAndAdrian1} alt="desktopImg" />
          <img className="desktopImg2" src={marioAndAdrian2} alt="desktopImg" />
          <img className="desktopImg3" src={restaurantChef} alt="desktopImg" />
          <img className="desktopImg4" src={restaurantImg} alt="desktopImg" />
        </div>
        <Link className="LinkClassName" to="/Order">
          <button className="mainButton">Reserve a table</button>
        </Link>
      </div>
      <div className="menuContainer">
        <h1 className="mainOrderTitle">ORDER FOR DELIVERY!</h1>
        <div className="mainScrollMenu">
          <button className="buttonCategories">Specials</button>
          <button className="buttonCategories">Starters</button>
          <button className="buttonCategories">Main</button>
          <button className="buttonCategories">Desserts</button>
          <button className="buttonCategories">Drinks</button>
        </div>
        <ArticleCards />
      </div>
    </main>
  );
};

export default Main;
