import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="no logo" className="logo" />
      <ul className="header-menu">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a href="#prog">Programs</a>
        </li>
        <li>
          <a href="#why">Why us</a>
        </li>
        <li>
          <a href="#plan">Plans</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
