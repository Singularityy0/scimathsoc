import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import { ThemeContext } from '../App';
import './Home.css';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                <GlitchText className="glitch-title" delay={1000}>
                  SCIENCE MATHS SOCIETY
                </GlitchText>
                <span className="hero-subtitle">IIT Kanpur</span>
              </h1>
              <p className="hero-description">
                Reviving academic curiosity in science and mathematics through structured learning, collaborative problem solving, and a culture of exploration—SciMathSoc is IIT Kanpur’s initiative to transform passion into output and community into impact.
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                  <ArrowRight size={20} />
                </Link>
                <Link to="/events" className="btn">
                  View Events
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-logo"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src={isDarkMode ? "/iitk-logo.png" : "/IIT-Kanpur.png"}
                alt="IIT Kanpur Logo" 
                className="iit-logo"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <GlitchText className="glitch-subtitle" delay={2000}>
                What We Do
              </GlitchText>
            </h2>
            <p className="section-subtitle">
              We conduct deep-dive sessions, problem-solving meets, and research-driven initiatives to cultivate rigorous thinking and meaningful academic output in science and mathematics.
            </p>
          </div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Research Projects</h3>
              <p>Collaborative research initiatives in mathematics and science.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Workshops</h3>
              <p>Hands-on workshops and skill development sessions.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Seminars</h3>
              <p>Expert talks and knowledge sharing sessions.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 