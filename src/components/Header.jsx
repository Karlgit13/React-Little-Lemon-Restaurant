import React from "react";
import "./header.css";
import Logo from "../assets/Logo2.svg";
import BurgerMenu from "../assets/hamburger_menu.svg";
import Basket from "../assets/Basket.svg";

const Header = () => {
  return (
    <header>
      <div className="header">
        <button className="burgerButton">
          <img src={BurgerMenu} alt="burgerMenu" />
        </button>
        <a href="#">
          <img className="headerLogo" src={Logo} alt="logo" />
        </a>
        <button className="basketButton">
          <img src={Basket} alt="basket" />
        </button>
      </div>
    </header>
  );
};

export default Header;
