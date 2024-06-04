import React, { useEffect, useState } from 'react';

function Typewriter({ textArray, delay, lineDelay }) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (textIndex < textArray.length) {
            const currentText = textArray[textIndex].text;
            const currentStyle = textArray[textIndex].style;

            if (charIndex < currentText.length) {
                setTimeout(() => {
                    setDisplayText(prev => (
                        <>
                            {prev}
                            <span style={currentStyle}>{currentText[charIndex]}</span>
                        </>
                    ));
                    setCharIndex(prev => prev + 1);
                }, delay);
            } else {
                setTimeout(() => {
                    setDisplayText(prev => (
                        <>
                            {prev}<br />
                        </>
                    ));
                    setCharIndex(0);
                    setTextIndex(prev => prev + 1);
                }, lineDelay);
            }
        }
    }, [textIndex, charIndex, textArray, delay, lineDelay]);

    return <>{displayText}</>;
}

export default Typewriter;