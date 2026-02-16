import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Students() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder as a public API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch student data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>Loading students...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Students List (from API)</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ 
            padding: '1rem', 
            borderBottom: '1px solid #eee',
            marginBottom: '0.5rem',
            backgroundColor: '#f9f9f9'
          }}>
            <strong>{user.name}</strong> - {user.email}
            <br />
            <small>Company: {user.company.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
