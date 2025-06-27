import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-top-right">
    <ul className="navbar-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/about">About Us</Link></li>
    </ul>
  </nav>
);

export default Navbar; 