import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
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
