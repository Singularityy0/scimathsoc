import React from 'react';
import { motion } from 'framer-motion';
import './History.css';

const History = () => {
  return (
    <div className="history-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Early History</h1>
          <p className="page-subtitle">
            Welcome to the hidden page! Here you'll find the untold story and some fun secrets of our society.
          </p>
        </motion.div>
        <motion.section 
          className="history-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>How It All Began</h2>
          <p>
            
            Although the inception The Science and Mathematics Society was this year only, there was a community dedicated for the same cause as we stand today 
          </p>
          <h2>Science Coffee House</h2>
          <ul>
            <li>Science Coffeehouse was a hobby and enthusiast group at the Indian Institute of Technology, Kanpur which presented its students a platform for discussions, talks, sharing ideas and not drinking coffee while doing so. The group indulged in the philandery of counter-intuitive mathematics along with a wide array of basic sciences.</li>
            <li> Founded in 2016 </li>
            
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default History;
