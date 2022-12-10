import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

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
        <Table striped responsive variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item =>(
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.genre}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  
  export default MoviesTable;