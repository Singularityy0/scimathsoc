import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaBook, FaProjectDiagram, FaBlog, FaCalendarAlt, FaImages, FaUsers, FaAddressCard } from 'react-icons/fa';
import './HomepageCards.css';

const cards = [
  {
    title: 'About Us',
    icon: <FaInfoCircle size={40} color="#4f8cff" />,
    desc: 'Learn more about our club, our mission, and the people behind the scenes.',
    route: '/about',
    color: '#e3f0ff',
  },
  {
    title: 'Resources',
    icon: <FaBook size={40} color="#ffb347" />,
    desc: 'Access curated study materials, guides, and helpful links for all math lovers.',
    route: '/resources',
    color: '#fff7e3',
  },
  {
    title: 'Projects',
    icon: <FaProjectDiagram size={40} color="#6ee7b7" />,
    desc: 'Explore our club’s math projects, collaborations, and innovative ideas.',
    route: '/projects',
    color: '#e3fff7',
  },
  {
    title: 'Blogs',
    icon: <FaBlog size={40} color="#ff6f91" />,
    desc: 'Read insightful articles, stories, and math musings from our members.',
    route: '/blogs',
    color: '#ffe3ec',
  },
  {
    title: 'Events',
    icon: <FaCalendarAlt size={40} color="#a78bfa" />,
    desc: 'Stay updated on upcoming math events, workshops, and competitions.',
    route: '/events',
    color: '#ede3ff',
  },
  {
    title: 'Gallery',
    icon: <FaImages size={40} color="#fbbf24" />,
    desc: 'Browse photos and memories from our club’s activities and events.',
    route: '/gallery',
    color: '#fffbe3',
  },
  {
    title: 'Team',
    icon: <FaUsers size={40} color="#34d399" />,
    desc: 'Meet the passionate team members who make everything possible.',
    route: '/team',
    color: '#e3fff0',
  },
  {
    title: 'Home',
    icon: <FaAddressCard size={40} color="#60a5fa" />,
    desc: 'Return to the homepage and start your journey through our club’s offerings.',
    route: '/',
    color: '#e3eaff',
  },
];

const HomepageCards = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-cards-container">
      {cards.map((card, idx) => (
        <div
          className="homepage-card"
          key={card.title}
          data-aos="fade-up"
          data-aos-delay={idx * 100}
          style={{ background: card.color }}
        >
          <div className="homepage-card-icon">{card.icon}</div>
          <h3 className="homepage-card-title">{card.title}</h3>
          <p className="homepage-card-desc">{card.desc}</p>
          <button
            className="homepage-card-btn"
            onClick={() => navigate(card.route)}
          >
            Explore
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomepageCards;
