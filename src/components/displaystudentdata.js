// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import setAuthToken from "./axiosConfig";

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   setAuthToken(localStorage.getItem("token"));
//   useEffect(() => {
//     // Make a GET request to your Spring Boot backend API to fetch the data
//     axios
//       .get("http://localhost:9099/api/Form/getall")
//       .then((response) => {
//         // Set the fetched data in the state

//         setStudents(response.data);
//       })
//       .catch((error) => {
//         alert("you are not authorized to access the data");
//         console.error("Error fetching data:", error);
//       });
//   }, []); // The empty dependency array ensures this runs once on component mount

//   return (
//     <div>
//       <center>
//         <h1>List of regesterd students</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               {/* <th>Program</th>
//             <th>Degree Level</th>
//             <th>Need Pick Up</th>
//             <th>Arrival Date</th>
//             <th>Need Accommodations</th>
//             <th>Email Address</th>
//             <th>Visa</th>
//             <th>Mobile</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.firstName}</td>
//                 <td>{student.lastName}</td>
//                 {/* <td>{student.program}</td>
//               <td>{student.degreeLevel}</td>
//               <td>{student.need_PickUp ? "Yes" : "No"}</td>
//               <td>{student.arrival_Date}</td>
//               <td>{student.need_Accommodations ? "Yes" : "No"}</td>
//               <td>{student.emailAddress}</td>
//               <td>{student.visa ? "Yes" : "No"}</td>
//               <td>{student.mobile}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </center>
//     </div>
//   );
// }

// export default StudentList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import setAuthToken from "./axiosConfig";
import "./StudentList.css"; // Import the CSS file

function StudentList() {
  const [students, setStudents] = useState([]);
  setAuthToken(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get("http://localhost:9099/api/Form/getall")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        alert("You are not authorized to access the data");
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="header">List of Registered Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="th">First Name</th>
            <th className="th">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="td">{student.firstName}</td>
              <td className="td">{student.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
