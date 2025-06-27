import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>Projects</h1>
      <p>Discover our club's math projects, collaborations, and innovative ideas. Get inspired and join us in making math fun and impactful!</p>
      <button style={{ marginTop: 24, background: '#6ee7b7', color: '#222', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/projects')}>Explore Projects</button>
    </div>
  );
};

export default Projects; 