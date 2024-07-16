// Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accommodations</Link>
          </li>
          <li>
            <Link to="/accommodation/add">Add Accommodation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
