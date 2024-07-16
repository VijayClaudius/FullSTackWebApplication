// Sidebar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Accommodations</Link>
        </li>
        <li>
          <Link to="/accommodation/add">Add Accommodation</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
