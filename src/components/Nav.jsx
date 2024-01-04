import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({ isVisible }) => {
  return (
    <nav>
      <div className={`nav ${!isVisible ? "hidden" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Order</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
