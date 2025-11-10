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
              <h3>Completed</h3>
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
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
          </div>


          <div className="event-card">
            <div className="event-date">
              <span className="day">17</span>
              <span className="month">Aug</span>
              <span className="year">2025</span>
            </div>
            <div className="event-content">
              <h3>Completed</h3>
              <p className="event-description">
              The Chamber of Challenges is designed as a science and maths escape room, a race against time where teams must solve interconnected puzzles, unlock hidden clues, and outwit the hourglass before it seals shut.

              </p>
              <div className="event-meta">
                <span className="event-category competition">Escape Room</span>
                <span className="event-time">
                  <Clock size={16} />
                  15:00 onwards
                </span>
                <span className="event-location">
                  <MapPin size={16} />
                  MPR
                </span>
              </div>
              <div className="event-status">
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
          </div>



          <div className="event-card">
            <div className="event-date">
              <span className="day">10</span>
              <span className="month">Sept</span>
              <span className="year">2025</span>
            </div>
            <div className="event-content">
              <h3>Completed</h3>
              <p className="event-description">
                <strong>Session 1: Calculus: from messy origins to rigor</strong><br/>
                <em>Prof. Amit Kuber (Math Dept., IITK)</em><br/><br/>
                Discover the fascinating journey from calculus's messy beginnings to mathematical rigor. We'll explore how early puzzling problems led to calculus's invention and why epsilon-delta "pedantry" is actually the foundation of mathematical precision.<br/><br/>
                Join us for a relaxed, interactive session where you can ask questions you couldn't in class and see how mathematical rigor transforms "obvious" concepts into powerful tools. Come explore the stories behind the subject and maybe find a new perspective on math!
              </p>
              <div className="event-meta">
                <span className="event-category seminar">Kyu Padhe Bhai?</span>
                <span className="event-time">
                  <Clock size={16} />
                  19:35 onwards
                </span>
                <span className="event-location">
                  <MapPin size={16} />
                  L17
                </span>
              </div>
              <div className="event-status">
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
          </div>

          
        </motion.section>
      </div>
    </div>
  );
};

export default Events; 