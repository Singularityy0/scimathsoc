import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Explore our ongoing and completed research projects in science and mathematics.
          </p>
        </motion.div>

        <motion.section 
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-card">
            <div className="project-image">
              <img 
                src="/projectsimg/IMG20240727151310.jpg" 
                alt="Project visual" 
                className="project-img-tag"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
            <div className="project-content">
              <h3>Upcoming</h3>
              <p className="project-description">
                coming Soon.
              </p>
              <div className="project-meta">
                <span className="project-status upcoming ">Upcoming...</span>
              </div>
              <div className="project-team">
                <p><strong>Team:</strong> N members</p>
                <p><strong>Duration:</strong> M  months</p>
              </div>
            </div>
          </div>

          
        </motion.section>
      </div>
    </div>
  );
};

export default Projects; 