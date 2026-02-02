import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SciMathSoc</h3>
            <p>Science Maths Society at IIT Kanpur</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>scimathsoc.iitk@gmail.com</p>
            <p>IIT Kanpur, Uttar Pradesh</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Science Maths Society, IIT Kanpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 