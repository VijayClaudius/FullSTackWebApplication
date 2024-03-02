import "./components/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Transportation from "./components/Transportation";
import Employment from "./components/Employment";
import Resources from "./components/Resources";
import Community from "./components/Community";
import Footer from "./components/Footer";
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

function App() {
  // axios.defaults.headers.common[
  //   "Authorization"
  // ] = `Bearer ${localStorage.token}`;
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Footer /> */}
      {localStorage.getItem("isLoggedIn") && <Header />}
      <Routes>
        {/* <Route path='/header' element={<Header/>}/> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
