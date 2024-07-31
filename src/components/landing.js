import React from 'react';
import Typewriter from '../Typewriter';
import '../styles/landing.css';
import downButton from '../images/downButton.png'
import landing_technical from '../images/landing_technical.png'

export function Landing() {
    return (
        <div className="landing2">
            <div className='landing2_text'>
                <h1 style={{color:'white', fontSize:'130px'}}>TECHNICAL</h1>
                
                <a href="#technical" style={{fontSize:'20px'}}>EXPLORE</a>
            </div>
            <img src={landing_technical} alt="landing technical"/>
        </div>

    )
    // const textArray = [
    //     { text: "Hello! 👋", style: { color: '#827057' } },
    //     { text: "I'm Michelle Yeoh.", style: { color: 'black' } },
    //     { text: "Aspiring Software / Web Developer.", style: { color: 'black' } }
    // ];

    // return (
    //     <div className="landing">
    //         <h2 style={{ color: 'black' }}>
    //             <Typewriter textArray={textArray} delay={50} lineDelay={150} />
    //         </h2>
    //         <a href="#technical">
    //             <img src={downButton} height={40} width={40} alt='down'/>
    //         </a>
            
    //     </div>
    // );
}