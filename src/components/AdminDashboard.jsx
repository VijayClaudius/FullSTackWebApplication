// // AdminDashboard.jsx

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import AccommodationList from "./AccommodationList";
// import AccommodationForm from "./AccommodationForm";
// import AccommodationDetails from "./AccommodationDetails";
// import "./admin-dashboard.css";

// const AdminDashboard = () => {
//   return (
//     <Router>
//       <div className="admin-dashboard">
//         <Header />
//         <Sidebar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<AccommodationList />} />
//             <Route path="/accommodation/add" element={<AccommodationForm />} />
//             <Route
//               path="/accommodation/:id"
//               element={<AccommodationDetails />}
//             />
//             <Route
//               path="/accommodation/:id/edit"
//               element={<AccommodationForm />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default AdminDashboard;

import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import AccommodationList from "./AccommodationList";
// import AccommodationForm from "./AccommodationForm";
// import AccommodationDetails from "./AccommodationDetails";
import "./admin-dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* <Header />
      <Sidebar /> */}
      <div className="main-content">
        {/* <Routes>
          <Route path="/" element={<AccommodationList />} />
          <Route path="/accommodation/add" element={<AccommodationForm />} />
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
          <Route
            path="/accommodation/:id/edit"
            element={<AccommodationForm />}
          />
        </Routes> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
