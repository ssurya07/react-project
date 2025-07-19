import React, { useState } from "react";
import { motion } from "framer-motion";

const validUser = {
  username: "mayandi",
  password: "12345678",
};

const Harish = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === validUser.username && credentials.password === validUser.password) {
      alert("Login Successful!"); 
      navigate("/home");
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5">
      {isLoggedIn ? (
        <h2>Welcome, {credentials.username}!</h2>
      ) : (
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card2">
                <form className="form" onSubmit={handleLogin}>
                  <p id="heading">Login</p>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <div className="field">
                    <input
                      type="text"
                      name="username"
                      className="input-field"
                      placeholder="Username"
                      autoComplete="off"
                      value={credentials.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="password"
                      className="input-field"
                      placeholder="Password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="btn">
                    <button type="submit" className="button1">
                     &nbsp; Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                    <button type="button" className="button2">
                      Sign Up
                    </button>
                  </div>
                  <div className="text-center">
                    <button type="button" className="button3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgot Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Harish;
