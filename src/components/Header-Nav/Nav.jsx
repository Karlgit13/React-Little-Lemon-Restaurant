import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import homeLogo from "../../assets/homehome.png";
import orderLogo from "../../assets/order-noww.png";
import bookingLogo from "../../assets/calendar.png";
import contactLogo from "../../assets/email.png";

const Nav = ({ isVisible }) => {
  const navClass = isVisible ? "nav" : "nav hidden";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link aria-label="Home" to="/">
            <img className="navLogos" src={homeLogo} alt="Home" />
          </Link>
        </li>
        <li>
          <Link aria-label="Order Food" to="/Order">
            <img className="navLogos" src={orderLogo} alt="Order" />
          </Link>
        </li>
        <li>
          <Link aria-label="Book a Table" to="/Booking">
            <img className="navLogos" src={bookingLogo} alt="Booking" />
          </Link>
        </li>
        <li>
          <Link aria-label="Contact Us" to="/Contact">
            <img className="navLogos" src={contactLogo} alt="Contact" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
