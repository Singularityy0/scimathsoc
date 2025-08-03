import React from 'react';
import { motion } from 'framer-motion';
import {Clock, MapPin } from 'lucide-react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Events</h1>
          <p className="page-subtitle">
            Join us for workshops, seminars, and exciting events throughout the year.
          </p>
        </motion.div>

        <motion.section 
          className="events-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="event-card">
            <div className="event-date">
              <span className="day">5</span>
              <span className="month">Aug</span>
              <span className="year">2025</span>
            </div>
            <div className="event-content">
              <h3>Upcoming</h3>
              <p className="event-description">
                SciMathSoc’s Intro Session at IIT Kanpur welcomes new students, showcasing the society’s activities, workshops, and competitions to spark interest in science and mathematics.
              </p>
              <div className="event-meta">
                <span className="event-category Intro">Scimathsoc Intro session</span>
                <span className="event-time">
                  <Clock size={16} />
                  7:00 PM - 9:00 PM
                </span>
                <span className="event-location">
                  <MapPin size={16} />
                  L7, Lecture Hall Complex, IIT Kanpur
                </span>
              </div>
              <div className="event-status">
                <span className="status-badge upcoming">Upcoming</span>
              </div>
            </div>
          </div>

          
        </motion.section>
      </div>
    </div>
  );
};

export default Events; 