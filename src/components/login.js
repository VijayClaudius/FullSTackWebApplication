import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file for Login component

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call to login endpoint
    axios
      .post("http://localhost:9099/authenticate", formData)
      .then((response) => {
        // Handle success response
        localStorage.token = response.data.jwtToken;
        localStorage.isLoggedIn = true;
        window.location = "/Home";
        alert("Login Successful");
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        alert("Login failed");
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
