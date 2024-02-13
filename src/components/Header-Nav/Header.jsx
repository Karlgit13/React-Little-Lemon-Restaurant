import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo2.svg";
import BurgerMenu from "../../assets/hamburger_menu.svg";
import Basket from "../../assets/Basket.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line
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
        <button
          aria-label="Toggle Navbar"
          onClick={toggleNav}
          className="burgerButton"
        >
          <img src={BurgerMenu} alt="Toggle Menu" />
        </button>
        <Link aria-label="Home" to="/">
          <img className="headerLogo" src={Logo} alt="Logo" />
        </Link>
        <Link to="/Cart">
          <button aria-label="Toggle Basket" className="basketButton">
            <img src={Basket} alt="basket" />
            {itemCount > 0 && (
              <span className="itemCountStyle">{itemCount}</span>
            )}
          </button>
        </Link>
      </div>
      <Nav isVisible={navVisible} />
    </header>
  );
};

export default Header;
