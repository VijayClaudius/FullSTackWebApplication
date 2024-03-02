import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // If no token is provided, remove the authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
