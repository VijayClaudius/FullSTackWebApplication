import "./components/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Transportation from "./components/Transportation";
import Employment from "./components/Employment";
import Resources from "./components/Resources";
import Community from "./components/Community";
// import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login";
import Registration from "./components/signup";
import UserList from "./components/UserList";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/displaystudentdata";
import DataDisplay from "./components/Accommodationdisplay";
import AccommodationDetails from "./components/AccommodationDetails";
import AdminDashboard from "./components/AdminDashboard";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  // axios.defaults.headers.common[
  //   "Authorization"
  // ] = `Bearer ${localStorage.token}`;

  return (
    <BrowserRouter>
      {isLoggedIn && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />

        <Route path="/Transportation" element={<Transportation />} />
        <Route path="/Employment" element={<Employment />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/DataDisplay" element={<DataDisplay />} />
        <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        <Route path="/Admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
