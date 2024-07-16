// import React from "react";

// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to Our Study Abroad Platform</h1>
//       <p>
//         Find the Best Accommodations, Transportation, and Employment
//         Opportunities for International Students rajesh.
//       </p>
//       <a href="/Login">Login</a> or <a href="/signup">signup</a> or
//       <button>Logout</button>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "./Home.css";
import AdminDashboard from "./AdminDashboard";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Study Abroad Platform</h1>
        <p>
          Find the Best Accommodations, Transportation, and Employment
          Opportunities for International Students.
        </p>
        <div className="cta-buttons">
          <a href="/login" className="cta-button">
            Login
          </a>
          <a href="/signup" className="cta-button">
            Signup
          </a>

          <AdminDashboard />
        </div>
      </div>
      <div className="featured-section">
        <h2>Featured Accommodations</h2>
        <div className="featured-items">
          <div className="featured-item">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Accommodation 1"
            />
            <h3>Modern Apartment</h3>
            <p>Located in the city center, close to all amenities.</p>
          </div>
          <div className="featured-item">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Accommodation 2"
            />
            <h3>Cozy Studio</h3>
            <p>Affordable and comfortable living space.</p>
          </div>
          <div className="featured-item">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Accommodation 3"
            />
            <h3>Shared House</h3>
            <p>Perfect for students looking to make new friends.</p>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <h2>Transportation Options</h2>
        <div className="featured-items">
          <div className="featured-item">
            <img src="https://via.placeholder.com/300x200" alt="Transport 1" />
            <h3>Public Transport</h3>
            <p>Convenient and cost-effective travel around the city.</p>
          </div>
          <div className="featured-item">
            <img src="https://via.placeholder.com/300x200" alt="Transport 2" />
            <h3>Bike Rentals</h3>
            <p>Eco-friendly and healthy way to get around.</p>
          </div>
          <div className="featured-item">
            <img src="https://via.placeholder.com/300x200" alt="Transport 3" />
            <h3>Car Sharing</h3>
            <p>Flexible and affordable car rental services.</p>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <h2>Employment Opportunities</h2>
        <div className="featured-items">
          <div className="featured-item">
            <img src="https://via.placeholder.com/300x200" alt="Employment 1" />
            <h3>Part-time Jobs</h3>
            <p>Find part-time jobs suitable for students.</p>
          </div>
          <div className="featured-item">
            <img src="https://via.placeholder.com/300x200" alt="Employment 2" />
            <h3>Internships</h3>
            <p>Gain work experience while studying abroad.</p>
          </div>
          <div className="featured-item">
            <img src="https://via.placeholder.com/300x200" alt="Employment 3" />
            <h3>Freelance Work</h3>
            <p>Flexible jobs you can do from anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
