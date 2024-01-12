import React, { useEffect, useState } from "react";
import "./main.css";
import FoodImg from "../../assets/restauranfood.jpg";
import ArticleCards from "./ArticleCards";
import marioAndAdrian1 from "../../assets/Mario and Adrian A.jpg";
import marioAndAdrian2 from "../../assets/Mario and Adrian b.jpg";
import restaurantChef from "../../assets/restaurant chef B.jpg";
import restaurantImg from "../../assets/restaurant.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainScrollMenu from "./MainScrollMenu";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main>
      <div className="mainCard">
        <h1 data-aos="fade-left" className="mainTitle">
          Little Lemon
        </h1>
        <h4 data-aos="fade-left" className="mainSubTitle">
          Restaurant
        </h4>
        <div className="mainContainer">
          <p data-aos="fade-left" className="mainParagraph">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <img
            data-aos="fade-right"
            className="mobileImg"
            src={FoodImg}
            alt="Food"
          />
        </div>
        <div className="desktopImgContainer">
          <img
            data-aos="fade-right"
            className="desktopImg1"
            src={marioAndAdrian1}
            alt="Mario and Adrian first"
          />
          <img
            data-aos="fade-right"
            className="desktopImg2"
            src={marioAndAdrian2}
            alt="Mario and Adrian second"
          />
          <img
            data-aos="fade-right"
            className="desktopImg3"
            src={restaurantChef}
            alt="Restaurant Chef"
          />
          <img
            data-aos="fade-right"
            className="desktopImg4"
            src={restaurantImg}
            alt="Restaurant outdoor Tables"
          />
        </div>
        <Link aria-label="Book a Table" className="LinkClassName" to="/Booking">
          <button
            aria-label="Book a Table"
            data-aos="fade-right"
            className="mainButton"
          >
            Reserve a table
          </button>
        </Link>
      </div>
      <div className="menuContainer">
        <h1 className="mainOrderTitle">Order for delivery!</h1>
        <MainScrollMenu onSelectCategory={handleCategoryClick} />
        <ArticleCards category={selectedCategory} />
      </div>
    </main>
  );
};

export default Main;
