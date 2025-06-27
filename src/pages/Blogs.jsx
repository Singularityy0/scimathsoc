import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>Blogs</h1>
      <p>Read insightful articles, stories, and math musings from our members. Stay curious and expand your mathematical horizons!</p>
      <button style={{ marginTop: 24, background: '#ff6f91', color: '#fff', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/blogs')}>Explore Blogs</button>
    </div>
  );
};

export default Blogs; 