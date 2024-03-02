import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "./axiosConfig";
import "./accommodationdispaly.css";
import { Link } from "react-router-dom";

class DataDisplay extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    setAuthToken(localStorage.getItem("token"));
    axios
      .get("http://localhost:9099/api/accommodations/getall") // Assuming your Spring Boot app is running on the same domain
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>List of accommodations in corpus christi Texas</h1>

        <div className="card-container">
          {data.map((item) => (
            <Link to="/accommodation/123">
              <div key={item.id} className="card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <p>Location: {item.location}</p>
                <p>Available: {item.available ? "Yes" : "No"}</p>
                <p>Contact Email: {item.contactEmail}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default DataDisplay;
