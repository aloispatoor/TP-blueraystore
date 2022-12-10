import React, { useState, useEffect } from 'react';

function MoviesTable() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost/movie');
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data);
      }
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h2>Here is the list of our movies</h2>
        {JSON.stringify(data)}
      </div>
    );
  }
  
  export default MoviesTable;