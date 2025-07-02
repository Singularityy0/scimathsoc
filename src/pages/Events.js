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
              <span className="day">15</span>
              <span className="month">Dec</span>
              <span className="year">2025</span>
            </div>
            <div className="event-content">
              <h3>Upcoming</h3>
              <p className="event-description">
                We'll be updating events soon.
              </p>
              <div className="event-meta">
                <span className="event-category workshop">Workshop</span>
                <span className="event-time">
                  <Clock size={16} />
                  2:00 PM - 5:00 PM
                </span>
                <span className="event-location">
                  <MapPin size={16} />
                  [location], IIT Kanpur
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