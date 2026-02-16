import React from 'react';

function StudentComponent({ name, course, year }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h3>Student Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentComponent;
