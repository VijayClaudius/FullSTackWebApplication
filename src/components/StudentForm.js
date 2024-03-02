import React, { useState } from "react";
import axios from "axios"; // Import Axios
import setAuthToken from "./axiosConfig";

import "./StudentForm.css";

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    program: "",
    degreeLevel: "",
    need_PickUp: false,
    arrival_Date: "",
    need_Accommodations: false,
    emailAddress: "",
    visa: false,
    mobile: 0,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthToken(localStorage.getItem("token"));
    try {
      // Send the formData to the Spring Boot API using Axios
      const response = await axios.post(
        "http://localhost:9099/api/Form/save",
        formData
      );

      alert("submit Successful");
      console.log(response.data);

      // Handle success, e.g., show a success message
      console.log("Form submitted successfully");
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Form submission failed", error);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <center>
      <div>
        <h1>Student Arrival Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Add input fields for all form fields */}
          {/* Example for First Name */}
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="program">Program:</label>
            <input
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="degreeLevel">DegreeLevel</label>
            <input
              type="text"
              id="degreeLevel"
              name="degreeLevel"
              value={formData.degreeLevel}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="need_PickUp">Need_PickUp</label>
            <input
              type="text"
              id="need_PickUp"
              name="need_PickUp"
              value={formData.need_PickUp}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="arrival_Date">Arrival_Date:</label>
            <input
              type="text"
              id="arrival_Date"
              name="arrival_Date"
              value={formData.arrival_Date}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="need_Accommodations">Need_Accommodations:</label>
            <input
              type="text"
              id="need_Accommodations"
              name="need_Accommodations"
              value={formData.need_Accommodations}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="emailAddress">EmailAddress:</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="visa">Visa:</label>
            <input
              type="text"
              id="visa"
              name="visa"
              value={formData.visa}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            {/* Add similar input fields for other form fields */}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </center>
  );
}

export default StudentForm;
