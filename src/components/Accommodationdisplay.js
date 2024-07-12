// import React, { Component } from "react";
// import axios from "axios";
// import setAuthToken from "./axiosConfig";
// import "./Accommodationdisplay.css";
// import { Link } from "react-router-dom";

// class DataDisplay extends Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     setAuthToken(localStorage.getItem("token"));
//     axios
//       .get("http://localhost:9099/api/accommodations/getall")
//       .then((response) => {
//         this.setState({ data: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <div className="data-display">
//         <h1>Accommodations in Corpus Christi, Texas</h1>
//         <div className="card-container">
//           {data.map((item) => (
//             <Link
//               to={`/accommodation/${item.id}`} // Redirect to accommodation details page
//               key={item.id}
//               className="card-link"
//             >
//               <div className="card">
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//                 <p>
//                   <strong>Price:</strong> {item.price}
//                 </p>
//                 <p>
//                   <strong>Location:</strong> {item.location}
//                 </p>
//                 <p>
//                   <strong>Available:</strong> {item.available ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Contact Email:</strong> {item.contactEmail}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default DataDisplay;

// import React, { Component } from "react";
// import axios from "axios";
// import setAuthToken from "./axiosConfig";
// import "./Accommodationdisplay.css";
// import { Link } from "react-router-dom";

// class DataDisplay extends Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     setAuthToken(localStorage.getItem("token"));
//     axios
//       .get("http://localhost:9099/api/accommodations/getall")
//       .then((response) => {
//         this.setState({ data: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <div className="data-display">
//         <h1>Accommodations in Corpus Christi, Texas</h1>
//         <div className="card-container">
//           {data.map((item) => (
//             <Link
//               to={`/accommodation/${item.id}`}
//               key={item.id}
//               className="card-link"
//             >
//               <div className="card">
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//                 <p>
//                   <strong>Price:</strong> {item.price}
//                 </p>
//                 <p>
//                   <strong>Location:</strong> {item.location}
//                 </p>
//                 <p>
//                   <strong>Available:</strong> {item.available ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Contact Email:</strong> {item.contactEmail}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default DataDisplay;

import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "./axiosConfig";
import "./Accommodationdisplay.css";
import { Link } from "react-router-dom";

class DataDisplay extends Component {
  state = {
    allData: [],
    data: [],
    loading: true,
    error: null,
    showAvailableOnly: false,
  };

  componentDidMount() {
    this.fetchAllAccommodations();
  }

  fetchAllAccommodations = () => {
    setAuthToken(localStorage.getItem("token"));
    axios
      .get("http://localhost:9099/api/accommodations/getall")
      .then((response) => {
        this.setState({
          allData: response.data,
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({
          error: "Error fetching data. Please try again later.",
          loading: false,
        });
      });
  };

  toggleAvailableAccommodations = () => {
    const { allData, showAvailableOnly } = this.state;
    const filteredData = allData.filter((item) => item.available);
    this.setState({
      data: showAvailableOnly ? allData : filteredData,
      showAvailableOnly: !showAvailableOnly,
    });
  };

  render() {
    const { data, loading, error, showAvailableOnly } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="data-display">
        <h1>Accommodations in Corpus Christi, Texas</h1>
        <button onClick={this.toggleAvailableAccommodations}>
          {showAvailableOnly
            ? "Show All Accommodations"
            : "Show Available Accommodations"}
        </button>
        <div className="card-container">
          {data.map((item) => (
            <Link
              to={`/accommodation/${item.id}`}
              key={item.id}
              className="card-link"
            >
              <div className="card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
                <p>
                  <strong>Available:</strong> {item.available ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Contact Email:</strong> {item.contactEmail}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default DataDisplay;
