import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Study Abroad Platform</h1>
      <p>
        Find the Best Accommodations, Transportation, and Employment
        Opportunities for International Students rajesh.
      </p>
      <a href="/Login">Login</a> or <a href="/signup">signup</a> or
      <button>Logout</button>
    </div>
  );
};

export default Home;
