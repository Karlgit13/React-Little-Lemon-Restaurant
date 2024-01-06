import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import homeLogo from "../assets/homehome.png";
import orderLogo from "../assets/order-noww.png";
import bookingLogo from "../assets/calendar.png";
import contactLogo from "../assets/email.png";

const Nav = ({ isVisible }) => {
  const navClass = isVisible ? "nav" : "nav hidden";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link to="/">
            <img className="navLogos" src={homeLogo} alt="homeLogo" />
          </Link>
        </li>
        <li>
          <Link to="/Order">
            <img className="navLogos" src={orderLogo} alt="orderLogo" />
          </Link>
        </li>
        <li>
          <Link to="/Booking">
            <img className="navLogos" src={bookingLogo} alt="bookingLogo" />
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <img className="navLogos" src={contactLogo} alt="contactLogo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
