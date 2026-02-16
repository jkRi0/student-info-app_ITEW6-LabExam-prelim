import React, { useState } from 'react';

function StudentComponent({ name, course, year }) {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollment = () => {
    setIsEnrolled(!isEnrolled);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h3>Student Details (Component)</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Status:</strong> {isEnrolled ? "Enrolled" : "Not Enrolled"}</p>
      
      <button 
        onClick={handleEnrollment}
        style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: isEnrolled ? '#ff4d4d' : '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer' 
        }}
      >
        {isEnrolled ? "Unenroll Student" : "Enroll Student"}
      </button>
    </div>
  );
}

export default StudentComponent;
