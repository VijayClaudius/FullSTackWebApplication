// // AccommodationList.jsx

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   getAllAccommodations,
//   deleteAccommodation,
// } from "../services/accommodationService";

// const AccommodationList = () => {
//   const [accommodations, setAccommodations] = useState([]);

//   useEffect(() => {
//     fetchAccommodations();
//   }, []);

//   const fetchAccommodations = async () => {
//     try {
//       const response = await getAllAccommodations();
//       setAccommodations(response.data);
//     } catch (error) {
//       console.error("Error fetching accommodations:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteAccommodation(id);
//       setAccommodations(accommodations.filter((acc) => acc.id !== id));
//     } catch (error) {
//       console.error("Error deleting accommodation:", error);
//     }
//   };

//   return (
//     <div className="accommodation-list">
//       <h2>Accommodations</h2>
//       <ul>
//         {accommodations.map((acc) => (
//           <li key={acc.id}>
//             <Link to={`/accommodation/${acc.id}`}>{acc.title}</Link>
//             <button onClick={() => handleDelete(acc.id)}>Delete</button>
//             <Link to={`/accommodation/${acc.id}/edit`}>Edit</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AccommodationList;
