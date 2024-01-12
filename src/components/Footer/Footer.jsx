import React from "react";
import "./footer.css";
import fbLogo from "../../assets/facebook.png";
import instaLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="doormatNavigation">
        <h1 className="footerTitle">Navigation</h1>
        <ul className="footerUl">
          <Link aria-label="Home" to="/">
            <li>Home</li>
          </Link>
          <br />
          <Link aria-label="Order Food" to="/order">
            <li>Order now</li>
          </Link>
          <br />
          <Link aria-label="Book a Table" to="/booking">
            <li>Reserve a table</li>
          </Link>
        </ul>
      </div>
      <div className="contactInfo">
        <h1 className="footerTitle">Contact-Info</h1>
        <ul className="footerUl">
          <li>MainStreet 1, Lemon Road.</li>
          <br />
          <li>0101010101.</li>
          <br />
          <li>
            LemonRestaurant <br /> @example.com.
          </li>
        </ul>
      </div>
      <div className="socialMediaLinks">
        <h1 className="footerTitle">@Socials</h1>
        <ul className="footerUl">
          <li>
            <img className="socialsLogo" src={fbLogo} alt="Facebook Logo" />
          </li>
          <li>
            <img className="socialsLogo" src={instaLogo} alt="Instagram Logo" />
          </li>
          <li>
            <img className="socialsLogo" src={twitterLogo} alt="twitter Logo" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
