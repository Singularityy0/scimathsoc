import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <h2>SciMathSoc</h2>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/team" 
            className={`navbar-link ${isActive('/team') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Team
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/events" 
            className={`navbar-link ${isActive('/events') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link 
            to="/resources" 
            className={`navbar-link ${isActive('/resources') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Resources
          </Link>
          <ThemeToggle />
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 