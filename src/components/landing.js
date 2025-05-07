import React from 'react';
import Typewriter from '../Typewriter';
import '../styles/landing.css';
import downButton from '../images/downButton.png'
// import { useEffect, useState } from 'react';
// import landing_technical from '../images/landing_technical.png'
// import landing_design from '../images/landing_design.png'

export function Landing() {
    // const items = [
    //     { title: 'TECHNICAL', link: '#technical', img: landing_technical },
    //     { title: 'DESIGN', link: '#design', img: landing_design },
    // ];

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [fadeClass, setFadeClass] = useState('fade-in');

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setFadeClass('fade-out');
    //         setTimeout(() => {
    //             setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    //             setFadeClass('fade-in');
    //         }, 1000); // Duration of fade-out effect
    //     }, 6000); // Interval between transitions, should be longer than the fade duration

    //     return () => clearInterval(interval);
    // }, [items.length]);

    // const currentItem = items[currentIndex];

    // return (
    //     <div className="landing-container">
    //         <div className={`landing2 ${fadeClass}`}>
    //             <div className="landing2_text">
    //                 <h1>{currentItem.title}</h1>
    //                 <a href={currentItem.link}>EXPLORE</a>
    //             </div>
    //             <img src={currentItem.img} alt="landing_img" />
    //         </div>
    //     </div>
    // );
    const textArray = [
        { text: "I'm Michelle Yeoh.", style: { color: 'black' } },
        { text: "Aspiring <Software Developer/>", style: { color: 'black' } }

    ];

    return (
        <div className="landing">
            <h2 style={{ color: 'black' }}>
                <div style={{ color: '#827057' }}>Hello! 👋</div>
                <Typewriter textArray={textArray} delay={50} lineDelay={150} />
            </h2>
            <a href="#technical">
                <img src={downButton} height={40} width={40} alt='down' />
            </a>

        </div>
    );
}