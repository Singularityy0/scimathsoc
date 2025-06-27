import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>Gallery</h1>
      <p>Browse photos and memories from our club's activities and events. Relive the best moments with us!</p>
      <button style={{ marginTop: 24, background: '#fbbf24', color: '#222', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/gallery')}>Explore Gallery</button>
    </div>
  );
};

export default Gallery; 