import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomepageCards from '../components/HomepageCards';
import '../styles/Home.css';
import hero from '../assets/Homepage.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">SciMathSoc</span>
            </h1>
            <h2 className="hero-subtitle">
              The Science & Math Society <br /> of IIT Kanpur
            </h2>
            <p className="hero-description">
              SciMathSoc is a vibrant community of curious and passionate
              students driven by a shared love for mathematics, physics, and the
              exciting world of quantum computing. We dive deep into the beauty
              of theoretical concepts, explore cutting-edge research, and engage
              in discussions that stretch the boundaries of knowledge.
            </p>
            <h3 className="bullet-heading">What do we do?</h3>
            <ul className="hero-bullets">
              <li>
                <strong>Upskilling:</strong> Learn new concepts and teach one another.
              </li>
              <li>
                <strong>Problem Solving:</strong> Solve problem sets prepared by members.
              </li>
              <li>
                <strong>Competitions:</strong> Train for national & international contests.
              </li>
            </ul>
            <p className="footer">2021 SciMathSoc, IIT Kanpur</p>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <HomepageCards />
      </section>
    </>
  );
};

export default Home;
