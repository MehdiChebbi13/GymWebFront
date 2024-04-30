import React, { useState } from "react";
import "./SignUp.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (newUser.gender === "") {
      setErrorMessage("Please select a gender.");
      return;
    }
    try {
      await axios.post("http://localhost:3001/users/signup", {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phoneNumber: newUser.phoneNumber,
        email: newUser.email,
        password: newUser.password,
        gender: newUser.gender,
      });
      navigate("/login");
    } catch (errorMessage) {
      setErrorMessage(
        "Failed to sign up. " +
          (errorMessage.response?.data?.message || "Please try again.")
      );
    }
  };
  return (
    <div className="App">
      <div className="signUp">
        <div className="signUp__container">
          <div className="wrap-logo-signup">
            <img src={Logo} alt="no logo" className="logo" />
          </div>

          <h1>Sign Up</h1>
          <form className="signUp-form" action="#" onSubmit={handleSubmit}>
            <div className="abrev">
              <div className="input">
                <div className="two-inputs-wrap">
                  <div className="first-input-wrap">
                    <h5>First Name</h5>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      onChange={(e) => {
                        setNewUser({ ...newUser, firstName: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="last-input-wrap">
                    <h5>Last Name</h5>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      onChange={(e) => {
                        setNewUser({ ...newUser, lastName: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="gender-inputs">
                  <div className="gender-wrap">
                    <label for="male">Male</label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={(e) => {
                        setNewUser({ ...newUser, gender: e.target.value });
                      }}
                    />
                  </div>
                  <div className="gender-wrap">
                    <label for="female">Female</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={(e) => {
                        setNewUser({ ...newUser, gender: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <h5>E-mail</h5>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setNewUser({ ...newUser, email: e.target.value });
                  }}
                  required
                />
                <div className="two-inputs-wrap">
                  <div className="first-input-wrap">
                    <h5>Password</h5>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => {
                        setNewUser({ ...newUser, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="last-input-wrap">
                    <h5>Confirm Password</h5>
                    <input
                      type="password"
                      placeholder="Confirm  your  password"
                      onChange={(e) => {
                        setNewUser({
                          ...newUser,
                          confirmPassword: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>
                <h5>Phone Number</h5>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    setNewUser({ ...newUser, phoneNumber: e.target.value });
                  }}
                  required
                />
              </div>
              {errorMessage && <div className="error">{errorMessage}</div>}
              <button className="signInButton" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <a href="/Login">Already have an account? Log in!</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
