import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './About.css';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className="about-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Learn more about the Science Maths Society and our mission at IIT Kanpur.
          </p>
        </motion.div>

        <motion.section 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To create a structured, intellectually vibrant community at IIT Kanpur that unites science and mathematics through rigorous training, collaborative problem-solving, and active participation in research and competitions—transforming scattered enthusiasm into sustained academic output.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To establish a leading platform where scientific and mathematical curiosity thrives through deep exploration, structured learning, and impactful initiatives—positioning IIT Kanpur at the forefront of academic excellence and innovation among IITs.
              </p>
              
              <h2>What We Do</h2>
              <ul>
                <li>Conduct deep-dive academic discussions that go beyond surface-level exploration</li>
                <li>Encourage collaborative problem-solving through regular meets and focused groups</li>
                <li>Facilitate research projects and the creation of learning materials as tangible academic output</li>
                <li>Provide resources for learning and exploration</li>
                <li>Provide a platform for students with Olympiad backgrounds and academic curiosity to thrive</li>
              </ul>
            </div>
            
            <motion.div 
              className="about-logo"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src={isDarkMode ? "/iitk-logo.png" : "/IIT-Kanpur.png"}
                alt="IIT Kanpur Logo" 
                className="iit-logo"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 