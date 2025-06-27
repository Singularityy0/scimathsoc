import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
