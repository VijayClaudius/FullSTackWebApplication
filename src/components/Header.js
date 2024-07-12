import React from "react";
import "./Header.css";

const Header = () => {
  const user = {
    name: "Vijay Kummari",
    profileImage:
      "https://www.realvnc.com/wp-content/uploads/2022/07/Placeholer-chris.jpg",
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://se-images.campuslabs.com/clink/images/099b498c-4ada-49b2-a492-e88be1cd4b23a147a43b-a947-4878-9020-b6c38e9f074e.jpg?preset=med-sq"
          alt="Logo"
        />
      </div>

      <nav className="navigation">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/DataDisplay">Accommodation</a>
          </li>
          <li>
            <a href="/transportation">Transportation</a>
          </li>
          <li>
            <a href="/employment">Employment</a>
          </li>
          <li>
            <a href="/Contact">Queries/Support</a>
          </li>
          <li>
            <a href="/StudentList">Students</a>
          </li>
        </ul>
      </nav>

      <div className="user-profile">
        <img src={user.profileImage} alt="Profile" />
        <span>{user.name}</span>
      </div>
    </header>
  );
};

export default Header;
