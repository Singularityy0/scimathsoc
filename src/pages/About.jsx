import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>About Us</h1>
      <p>Learn more about our club, our mission, and the people behind the scenes. Discover what makes us unique!</p>
      <button style={{ marginTop: 24, background: '#4f8cff', color: '#fff', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/about')}>Explore About Us</button>
    </div>
  );
};

export default About; 