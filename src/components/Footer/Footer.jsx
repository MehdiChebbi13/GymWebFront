import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="Footer">
        <div className="socials">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
