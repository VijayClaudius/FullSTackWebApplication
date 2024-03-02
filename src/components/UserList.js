import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API
    axios.get('https:localhost:9099/findall')
      .then(response => {
        // Update the user data state with the fetched data
        setUserData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.userFirstName}</td>
              <td>{user.userLastName}</td>
              <td>{user.userPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
