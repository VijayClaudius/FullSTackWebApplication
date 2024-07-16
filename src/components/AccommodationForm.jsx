// // AccommodationForm.jsx

// import React, { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import {
//   getAccommodationById,
//   addAccommodation,
//   updateAccommodation,
// } from "../services/accommodationService";

// const AccommodationForm = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [available, setAvailable] = useState(false);
//   const [contactEmail, setContactEmail] = useState("");

//   useEffect(() => {
//     if (id) {
//       fetchAccommodationDetails();
//     }
//   }, [id]);

//   const fetchAccommodationDetails = async () => {
//     try {
//       const response = await getAccommodationById(id);
//       const { title, description, price, location, available, contactEmail } =
//         response.data;
//       setTitle(title);
//       setDescription(description);
//       setPrice(price);
//       setLocation(location);
//       setAvailable(available);
//       setContactEmail(contactEmail);
//     } catch (error) {
//       console.error("Error fetching accommodation details:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const accommodationData = {
//       title,
//       description,
//       price,
//       location,
//       available,
//       contactEmail,
//     };

//     try {
//       if (id) {
//         await updateAccommodation(id, accommodationData);
//       } else {
//         await addAccommodation(accommodationData);
//       }
//       history.push("/");
//     } catch (error) {
//       console.error("Error submitting accommodation:", error);
//     }
//   };

//   return (
//     <div className="accommodation-form">
//       <h2>{id ? "Edit Accommodation" : "Add Accommodation"}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <label>Price:</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />

//         <label>Location:</label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <label>Available:</label>
//         <input
//           type="checkbox"
//           checked={available}
//           onChange={(e) => setAvailable(e.target.checked)}
//         />

//         <label>Contact Email:</label>
//         <input
//           type="email"
//           value={contactEmail}
//           onChange={(e) => setContactEmail(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AccommodationForm;
