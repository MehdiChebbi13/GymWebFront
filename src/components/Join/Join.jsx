import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rcti53q", "template_tk8fzdi", form.current, {
        publicKey: "ydMvbVOWffSy18TMY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
