import React, { useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace '/api/data' with your API endpoint
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Data Display</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
