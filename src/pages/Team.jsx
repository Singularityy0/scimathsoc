import React from 'react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>Team</h1>
      <p>Meet the passionate team members who make everything possible. Get to know us and connect!</p>
      <button style={{ marginTop: 24, background: '#34d399', color: '#222', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/team')}>Explore Team</button>
    </div>
  );
};

export default Team; 