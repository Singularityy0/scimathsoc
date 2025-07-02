import React, { useEffect, useRef } from 'react';
import './GlitchText.css';

const GlitchText = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const glitchText = () => {
      const originalText = text.textContent;
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
      
      const glitch = () => {
        let glitchedText = '';
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() < 0.15) {
            glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitchedText += originalText[i];
          }
        }
        text.textContent = glitchedText;
        
        setTimeout(() => {
          text.textContent = originalText;
        }, 400);
      };

      const interval = setInterval(glitch, 8000 + Math.random() * 4000);
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(glitchText, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span ref={textRef} className={`glitch-text ${className}`}>
      {children}
    </span>
  );
};

export default GlitchText; 