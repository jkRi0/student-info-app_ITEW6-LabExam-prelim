import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <h1>Student Info App</h1>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/students" style={{ color: 'white' }}>Students</Link>
      </nav>
    </header>
  );
}

export default HeaderComponent;
