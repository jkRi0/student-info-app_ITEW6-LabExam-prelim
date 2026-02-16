import React, { useState } from 'react';
import StudentComponent from '../components/StudentComponent';

function Home() {
  const [showInfo, setShowInfo] = useState(false);

  const studentData = {
    name: "John Doe",
    course: "Bachelor of Science in Information Technology",
    year: "3rd Year"
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Home Page</h2>
      <p>Welcome to the Student Information Application.</p>
      
      <button 
        onClick={() => setShowInfo(!showInfo)}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        {showInfo ? "Hide Student Info" : "Show Student Info"}
      </button>

      {showInfo && (
        <StudentComponent 
          name={studentData.name} 
          course={studentData.course} 
          year={studentData.year} 
        />
      )}
    </div>
  );
}

export default Home;
