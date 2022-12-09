import React, { useState, useEffect } from 'react';

function Api() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost/movie');
        const data = await response.json();
        setData(data);
        setLoading(false);
      }
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1>Data from the API:</h1>
        {JSON.stringify(data)}
      </div>
    );
  }
  
  export default Api;