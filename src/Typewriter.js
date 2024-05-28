import React, { useState, useEffect } from 'react';

const Typewriter = ({ textArray, delay, lineDelay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < textArray.length) {
      if (currentIndex < textArray[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + textArray[lineIndex][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Move to the next line after a delay
        const lineTimeout = setTimeout(() => {
          setCurrentText(prevText => prevText + '\n');
          setCurrentIndex(0);
          setLineIndex(prevLineIndex => prevLineIndex + 1);
        }, lineDelay);
        return () => clearTimeout(lineTimeout);
      }
    }
  }, [currentIndex, lineIndex, delay, lineDelay, textArray]);

  return <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'Cardo' }}>{currentText}</div>;
};

export default Typewriter;