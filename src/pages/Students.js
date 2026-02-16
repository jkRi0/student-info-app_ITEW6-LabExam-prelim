import React, { useState } from 'react';
import StudentComponent from '../components/StudentComponent';

function Students() {
  const [showAll, setShowAll] = useState(true);

  const students = [
    { id: 1, name: 'Justine Ken Rioveros', course: 'BS Information Technology', year: '4th Year' },
    { id: 2, name: 'Jeffry Duria', course: 'BS Information Technology', year: '4th Year' },
    { id: 3, name: 'Darren Martin', course: 'BS Information Technology', year: '4th Year' },
    { id: 4, name: 'Vin Cedrick Lamis', course: 'BS Information Technology', year: '4th Year' },
    { id: 5, name: 'Alex Cruz', course: 'BS Computer Science', year: '3rd Year' },
    { id: 6, name: 'Bianca Flores', course: 'BS Computer Science', year: '2nd Year' },
    { id: 7, name: 'Carlo Mendoza', course: 'BS Computer Science', year: '1st Year' },
    { id: 8, name: 'Diana Ramos', course: 'BS Computer Science', year: '4th Year' },
  ];

  const visibleStudents = showAll ? students : students.filter(s => s.course === 'BS Information Technology');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Students</h2>
      <p>These are the real students stored in the application.</p>

      <button
        onClick={() => setShowAll(!showAll)}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer', marginBottom: '1rem' }}
      >
        {showAll ? 'Show BSIT Only' : 'Show All Students'}
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {visibleStudents.map(student => (
          <StudentComponent
            key={student.id}
            name={student.name}
            course={student.course}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;
