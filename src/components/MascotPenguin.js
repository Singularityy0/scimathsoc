import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

const tips = [
  "Did you find the secret history page?",
  "Try clicking around for surprises!",
  "Stay curious, stay inspired.",
  "Penguins love cold logic!",
];

const rareTip = "Fun fact: I'm a plush penguin belonging to the website's creator. Ask them about Pingu!";

const MascotPenguin = () => {
  const [wave, setWave] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [tip, setTip] = useState(tips[0]);
  const [visible, setVisible] = useState(false);
  const [xPos, setXPos] = useState(-100); 
  const { isDarkMode } = useContext(ThemeContext) || { isDarkMode: false };

  
  useEffect(() => {
    let tipIndex = 0;
    let isMounted = true;
    const sequence = async () => {
      if (!isMounted) return;
      setVisible(true);
      setXPos(-100);
      await new Promise(res => setTimeout(res, 200));
      setXPos(24);
      await new Promise(res => setTimeout(res, 1200));
      setWave(true);
      setShowTip(true);
      setTip('Hello and welcome!');
      await new Promise(res => setTimeout(res, 2000));
      setWave(false);
      setShowTip(false);
      setXPos(-100);
      await new Promise(res => setTimeout(res, 1200));
      setVisible(false);
      await new Promise(res => setTimeout(res, 2000));
      // Loop tips
      while (isMounted) {
        setVisible(true);
        setXPos(-100);
        await new Promise(res => setTimeout(res, 200));
        setXPos(24);
        await new Promise(res => setTimeout(res, 1200));
        setWave(true);
        setShowTip(true);
        let isRare = false;
        if (Math.random() < 0.25) {
          setTip(rareTip);
          isRare = true;
        } else {
          setTip(tips[tipIndex % tips.length]);
          tipIndex++;
        }
        await new Promise(res => setTimeout(res, isRare ? 8000 : 4000));
        setWave(false);
        setShowTip(false);
        setXPos(-100);
        await new Promise(res => setTimeout(res, 1200));
        setVisible(false);
        await new Promise(res => setTimeout(res, 8000));
      }
    };
    sequence();
    return () => { isMounted = false; };
  }, []);


  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      left: xPos,
      zIndex: 9999,
      pointerEvents: 'none',
      transition: 'left 1.2s cubic-bezier(.77,0,.18,1)',
    }}>
      <div style={{ position: 'relative', width: 64, height: 80 }}>
        {/* Penguin SVG */}
        <svg width="64" height="80" viewBox="0 0 64 80">
          {/* Pink Woolen Winter Cap (Smaller) */}
          <ellipse cx="32" cy="19" rx="16" ry="8" fill="#ec4899" />
          {/* Pom-pom (Smaller) */}
          <ellipse cx="32" cy="10" rx="6" ry="6" fill="#f9a8d4" />
          {/* Woolen band, now overlapping forehead */}
          <ellipse cx="32" cy="27" rx="16" ry="6" fill="#f9a8d4" />
          {/* Woolen texture: vertical lines, now on band */}
          <line x1="19" y1="21" x2="19" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="23" y1="21" x2="23" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="27" y1="21" x2="27" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="31" y1="21" x2="31" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="35" y1="21" x2="35" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="39" y1="21" x2="39" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="43" y1="21" x2="43" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          <line x1="47" y1="21" x2="47" y2="33" stroke="#ec4899" strokeWidth="1.5" />
          {/* Body */}
          <ellipse cx="32" cy="48" rx="22" ry="28" fill="#000000ff" />
          {/* Belly */}
          <ellipse cx="32" cy="56" rx="14" ry="18" fill="#f3f4f6" />
          {/* Face */}
          <ellipse cx="32" cy="32" rx="16" ry="14" fill="#f3f4f6" />
          {/* Eyes */}
          <ellipse cx="26" cy="32" rx="3" ry="3" fill="#222" />
          <ellipse cx="38" cy="32" rx="3" ry="3" fill="#222" />
          {/* Beak */}
          <polygon points="30,38 34,38 32,42" fill="#fbbf24" />
          {/* Left Flipper (waves) */}
          <g style={{
            transformOrigin: '12px 56px',
            transform: wave ? 'rotate(-40deg)' : 'rotate(0deg)',
            transition: 'transform 0.5s'
          }}>
            <ellipse cx="12" cy="56" rx="6" ry="16" fill="#000000ff" />
          </g>
          {/* Right Flipper */}
          <ellipse cx="52" cy="56" rx="6" ry="16" fill="#000000ff" />
          {/* Feet */}
          <ellipse cx="24" cy="74" rx="5" ry="3" fill="#fbbf24" />
          <ellipse cx="40" cy="74" rx="5" ry="3" fill="#fbbf24" />
        </svg>
        {/* Tip Bubble */}
        {showTip && (
          <div style={{
            position: 'absolute',
            left: 60,
            bottom: 30,
            background: isDarkMode ? '#23272f' : '#fffbe7',
            color: isDarkMode ? '#e5e7eb' : '#222',
            border: '1px solid #eab308',
            borderRadius: 12,
            padding: '10px 16px',
            fontSize: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            minWidth: 120,
            pointerEvents: 'auto',
          }}>
            {tip}
          </div>
        )}
      </div>
    </div>
  );
};

export default MascotPenguin;
