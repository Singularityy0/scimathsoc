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
                src="/projectsimg/nt.jpg" 
                alt="Project visual" 
                className="project-img-tag"
              />
            </div>
            <div className="project-content">
              <h3>Number Theory & applications</h3>
              <p className="project-description">
                An intensive camp between core number theory and its applications in competitive programming and modern computing and cryptography.
              </p>
              <div className="project-meta">
                <span className="project-status upcoming ">Upcoming...</span>
              </div>
              <div className="project-team">
                <p><strong>Team:</strong> N/A</p>
                <p><strong>Duration:</strong> 1 week</p>
              </div>
              <div className="project-actions">
                <a
                  className="project-apply-btn"
                  href="https://forms.gle/cqiZWMv4viyvk6MK9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here
                </a>
              </div>
            </div>
          </div>

          
        </motion.section>

        <motion.section 
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-card">
            <div className="project-image">
              <img 
                src="/projectsimg/cc.jpg" 
                alt="Project visual" 
                className="project-img-tag"
              />
            </div>
            <div className="project-content">
              <h3>Computational Complexity</h3>
              <p className="project-description">
                The goal of this camp is to introduce students to the fundamentals of computational
complexity — covering Turing machines, complexity classes, reductions, and completeness.
              </p>
              <div className="project-meta">
                <span className="project-status upcoming ">Upcoming...</span>
              </div>
              <div className="project-team">
                <p><strong>Team:</strong> N/A</p>
                <p><strong>Duration:</strong> 1 week</p>
              </div>
              <div className="project-actions">
                <a
                  className="project-apply-btn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbuSad4DpQHkpC5qdIKtoTJecatBW8-lmsU4ElYq80NMy0Xg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here
                </a>
              </div>
            </div>
          </div>

          
        </motion.section>



        <motion.section 
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-card">
            <div className="project-image">
              <img 
                src="/projectsimg/rt.jpg" 
                alt="Project visual" 
                className="project-img-tag"
              />
            </div>
            <div className="project-content">
              <h3>Theory of Relativity</h3>
              <p className="project-description">
                The goal of this camp is to introduce students to the fundamentals of the Theory of Relativity — covering key concepts and implications.
              </p>
              <div className="project-meta">
                <span className="project-status upcoming ">Upcoming...</span>
              </div>
              <div className="project-team">
                <p><strong>Team:</strong> N/A</p>
                <p><strong>Duration:</strong> 1 week</p>
              </div>
              <div className="project-actions">
                <a
                  className="project-apply-btn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeeoJCY08ie5AmbSb2bejUNRQaY95Uw7yPyjYCSexnDRWv4og/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here
                </a>
              </div>
            </div>
          </div>

          
        </motion.section>





        <motion.section 
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-card">
            <div className="project-image">
              <img 
                src="/projectsimg/mml.jpg" 
                alt="Project visual" 
                className="project-img-tag"
              />
            </div>
            <div className="project-content">
              <h3>Maths in Machine Learning and Deep Learning</h3>
              <p className="project-description">
                The goal of this camp is to introduce students to the fundamentals of the mathematics
                underlying machine learning and deep learning — covering key concepts such as linear
                algebra, calculus, and probability.
              </p>
              <div className="project-meta">
                <span className="project-status upcoming ">Upcoming...</span>
              </div>
              <div className="project-team">
                <p><strong>Team:</strong> N/A</p>
                <p><strong>Duration:</strong> 1 week</p>
              </div>
              <div className="project-actions">
                <a
                  className="project-apply-btn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe7DnCsqO7gQxm0-z1lKcUEes7KC-grXJAIsbSDpm2PppGmmg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here
                </a>
              </div>
            </div>
          </div>

          
        </motion.section>



        <motion.section 
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-card">
            <div className="project-image">
              <img 
                src="/projectsimg/qc.jpg" 
                alt="Project visual" 
                className="project-img-tag"
              />
            </div>
            <div className="project-content">
              <h3>Quantum Computing</h3>
              <p className="project-description">
                The goal of this camp is to introduce students to the fundamentals of quantum computing,
                covering key concepts such as qubits, superposition, entanglement, and quantum gates.
              </p>
              <div className="project-meta">
                <span className="project-status upcoming ">Upcoming...</span>
              </div>
              <div className="project-team">
                <p><strong>Team:</strong> N/A</p>
                <p><strong>Duration:</strong> 1 week</p>
              </div>
              <div className="project-actions">
                <a
                  className="project-apply-btn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeVcmbpGTJY_01tulnOroLFo3AWtfn7gZxc8PNaRPJyGHpaiw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply here
                </a>
              </div>
            </div>
          </div>

          
        </motion.section>


      </div>
    </div>
  );
};

export default Projects; 