import React from 'react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h1>Events</h1>
      <p>Stay updated on upcoming math events, workshops, and competitions. Don't miss out on the excitement!</p>
      <button style={{ marginTop: 24, background: '#a78bfa', color: '#fff', border: 'none', borderRadius: 20, padding: '0.7rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/events')}>Explore Events</button>
    </div>
  );
};

export default Events; 