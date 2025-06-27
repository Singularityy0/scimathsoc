import React from 'react';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>Resources</h1>
      <p>Access a curated collection of study materials, guides, and helpful links for all math enthusiasts. Dive into our resources to boost your mathematical journey!</p>
      <button style={{ marginTop: 24, background: '#4f8cff', color: '#fff', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/resources')}>Explore Resources</button>
    </div>
  );
};

export default Resources; 