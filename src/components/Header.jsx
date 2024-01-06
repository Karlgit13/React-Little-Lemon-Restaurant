import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../assets/Logo2.svg";
import BurgerMenu from "../assets/hamburger_menu.svg";
import Basket from "../assets/Basket.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Håller koll på senaste scroll position

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Om scrollningen är nedåt
        setNavVisible(true); // Dölj navigationsbaren
      }
      setLastScrollY(window.scrollY); // Uppdatera den senaste scroll positionen
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth >= 992) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    };

    updateVisibility();

    window.addEventListener("resize", updateVisibility);

    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

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
      <Nav isVisible={navVisible} />
    </header>
  );
};

export default Header;
