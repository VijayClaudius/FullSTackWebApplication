// import React, { Component } from "react";
// import axios from "axios";
// import setAuthToken from "./axiosConfig";
// import "./Accommodationdetails.css"; // Create a CSS file for styling this component

// class AccommodationDetails extends Component {
//   state = {
//     accommodation: null,
//   };

//   componentDidMount() {
//     const { AccID } = this.props.match.params;
//     setAuthToken(localStorage.getItem("token"));
//     axios
//       .get(`http://localhost:9099/api/accommodations/${AccID}`)

//       .then((response) => {
//         this.setState({ accommodation: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     const { accommodation } = this.state;

//     if (!accommodation) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div className="accommodation-detail">
//         <h1>{accommodation.title}</h1>
//         <p>{accommodation.description}</p>
//         <p>
//           <strong>Price:</strong> {accommodation.price}
//         </p>
//         <p>
//           <strong>Location:</strong> {accommodation.location}
//         </p>
//         <p>
//           <strong>Available:</strong> {accommodation.available ? "Yes" : "No"}
//         </p>
//         <p>
//           <strong>Contact Email:</strong> {accommodation.contactEmail}
//         </p>
//       </div>
//     );
//   }
// }

// export default AccommodationDetails;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import setAuthToken from "./axiosConfig";
// import "./Accommodationdetails.css";

// const AccommodationDetail = () => {
//   const { id } = useParams();
//   const [accommodation, setAccommodation] = useState(null);

//   useEffect(() => {
//     setAuthToken(localStorage.getItem("token"));
//     axios
//       .get(`http://localhost:9099/api/accommodations/${id}`)
//       .then((response) => {
//         setAccommodation(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [id]);

//   if (!accommodation) {
//     return <div>Loading...</div>;
//   }
//   console.log("Rendering accommodation details:", accommodation);
//   return (
//     <div className="accommodation-detail">
//       <h1>{accommodation.title}</h1>
//       <p>{accommodation.description}</p>
//       <p>
//         <strong>Price:</strong> {accommodation.price}
//       </p>
//       <p>
//         <strong>Location:</strong> {accommodation.location}
//       </p>
//       <p>
//         <strong>Available:</strong> {accommodation.available ? "Yes" : "No"}
//       </p>
//       <p>
//         <strong>Contact Email:</strong> {accommodation.contactEmail}
//       </p>
//     </div>
//   );
// };

// export default AccommodationDetail;

//

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import setAuthToken from "./axiosConfig";
import "./Accommodationdetails.css";

const AccommodationDetail = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodation = async () => {
      setLoading(true);
      setError(null);
      try {
        setAuthToken(localStorage.getItem("token"));
        const response = await axios.get(
          `http://localhost:9099/api/accommodations/${id}`
        );
        console.log("Response data:", response.data);
        setAccommodation(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchAccommodation();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!accommodation) {
    return <div>No data found.</div>;
  }

  console.log("Rendering accommodation details vijay:", accommodation);

  return (
    <div>
      <h1>{accommodation.title}</h1>
      <p>{accommodation.description}</p>

      <p>
        <strong>Price:</strong> {accommodation.price}
      </p>
      <p>
        <strong>Location:</strong> {accommodation.location}
      </p>
      <p>
        <strong>Available:</strong> {accommodation.available ? "Yes" : "No"}
      </p>
      <p>
        <strong>Contact Email:</strong> {accommodation.contactEmail}
      </p>
    </div>
  );
};

export default AccommodationDetail;
