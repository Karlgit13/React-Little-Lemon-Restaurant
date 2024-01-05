import React, { useState } from "react";
import "./header.css";
import Logo from "../assets/Logo2.svg";
import BurgerMenu from "../assets/hamburger_menu.svg";
import Basket from "../assets/Basket.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header>
      <div className="header">
        <button onClick={toggleNav} className="burgerButton">
          <img src={BurgerMenu} alt="burgerMenu" />
        </button>
        <Link to="/">
          <img className="headerLogo" src={Logo} alt="logo" />
        </Link>
        <button className="basketButton">
          <img src={Basket} alt="basket" />
        </button>
      </div>
      {navVisible && <Nav isVisible={navVisible} />}
    </header>
  );
};

export default Header;
