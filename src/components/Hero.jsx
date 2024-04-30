import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuthContext";
import unknown from "../assets/unknown-user.png";

const Hero = () => {
  const { currentUser } = useAuth();
  const transition = { type: "spring", duration: 3 };
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  const handleClick = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "spring", duration: 3 }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero hading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        {!currentUser?.firstName && (
          <div className="btn-pos">
            <button className="btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn" onClick={() => navigate("/signup")}>
              Join Now
            </button>
          </div>
        )}
        {currentUser?.firstName && (
          <div className="btn-pos">
            <button className="btn-logout" onClick={handleClick}>
              Log Out
              <span class="material-symbols-outlined logout">logout</span>
            </button>
            <div className="img">
              <img src={unknown} alt="" onClick={() => navigate("/profile")} />
            </div>
          </div>
        )}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "21rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>450 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
