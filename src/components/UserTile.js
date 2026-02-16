import React, { useState } from 'react';

function UserTile({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}
    >
      <h3 style={{ marginTop: 0 }}>{user.name} (@{user.username})</h3>

      <button
        onClick={() => setShowInfo(!showInfo)}
        style={{
          padding: '0.4rem 0.8rem',
          marginBottom: '0.75rem',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #282c34',
          backgroundColor: showInfo ? '#282c34' : '#ffffff',
          color: showInfo ? '#ffffff' : '#282c34',
        }}
      >
        {showInfo ? "Hide User's Info" : "Show User's Info"}
      </button>

      {showInfo && (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </>
      )}
    </div>
  );
}

export default UserTile;
