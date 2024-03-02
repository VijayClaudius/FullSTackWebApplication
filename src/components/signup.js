import React, { useState } from "react";
import axios from "axios";
import "./Signup.css"; // Import the CSS file for Registration component

const Registration = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userFirstName: "",
    userLastName: "",
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
    console.log(formData);

    // Make API call to registration endpoint
    axios
      .post("http://localhost:9099/registerNewUser", formData)

      // const signupAxios = axios.create();
      // signupAxios.post('http://localhost:9099/registerNewUser', formData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
        alert("Regestration successfully");
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
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
          <label>First Name:</label>
          <input
            type="text"
            name="userFirstName"
            value={formData.userFirstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="userLastName"
            value={formData.userLastName}
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
        <b2>forgot password??</b2>
      </form>
    </div>
  );
};

export default Registration;
