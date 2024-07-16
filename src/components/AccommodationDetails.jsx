// AccommodationDetails.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAccommodationById } from "../services/accommodationService";

const AccommodationDetails = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    fetchAccommodationDetails();
  }, []);

  const fetchAccommodationDetails = async () => {
    try {
      const response = await getAccommodationById(id);
      setAccommodation(response.data);
    } catch (error) {
      console.error("Error fetching accommodation details:", error);
    }
  };

  if (!accommodation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="accommodation-details">
      <h2>{accommodation.title}</h2>
      <p>{accommodation.description}</p>
      <p>Price: {accommodation.price}</p>
      <p>Location: {accommodation.location}</p>
      <p>Available: {accommodation.available ? "Yes" : "No"}</p>
      <p>Contact Email: {accommodation.contactEmail}</p>
      <Link to={`/accommodation/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default AccommodationDetails;
