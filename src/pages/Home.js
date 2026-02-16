import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTile from '../components/UserTile';

function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch student data. Please try again later.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Home Page</h2>
      <p>Welcome to the Student Information Application.</p>

      <div style={{ marginTop: '20px' }}>
        {loading && <p>Loading users from API...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '10px',
            }}
          >
            {students.map((user) => (
              <UserTile key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
