import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;
  return (
    <div className="Testimonials" id="testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(length - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
