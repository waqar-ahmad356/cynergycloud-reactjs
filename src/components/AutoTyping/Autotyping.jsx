import React, { useEffect, useState } from 'react';
import './AutoTyping.css'; // Make sure to import your CSS file

const Autotyping = () => {
  const texts = [
    "Collaboration",
    "Communication",
    "Creativity",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 100; // Deleting speed in ms
  const pauseDuration = 200; // Pause duration before changing text

  useEffect(() => {
    let timer;

    if (isDeleting) {
      // Deleting text
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Change to next text after deleting
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length); // Loop through texts
          setCharIndex(0); // Reset character index for the next text
        }, pauseDuration);
      }
    } else {
      // Typing text
      if (charIndex < texts[textIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Pause after typing the full text
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [isDeleting, charIndex, textIndex, texts]);

  return (
    <div className="auto-typing-container">
      {displayText}
      
    </div>
    
  );
};

export default Autotyping;
