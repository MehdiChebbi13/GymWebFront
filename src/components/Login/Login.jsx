import { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../Hooks/UseAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      loginUser(data.user);
      navigate("/");
    } catch (error) {
      setErrorMessage("Failed to log in. Please check your credentials.");
    }
  };
  return (
    <div className="App">
      <div className="login">
        <div className="login__container">
          <div className="wrap-logo">
            <img src={Logo} alt="no logo" className="logo" />
          </div>

          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
            <div className="abrev">
              <div className="input">
                <h5>Email</h5>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <h5>Password</h5>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="login__signInButton" type="submit">
                Login
              </button>
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </form>
          <a href="/SignUp">You don't have an account ? Sign Up!</a>
        </div>

        <div className="blur blur-l-1"></div>
        <div className="blur blur-l-2"></div>
      </div>
    </div>
  );
};

export default Login;
