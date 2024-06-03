import "../styles/landing.css"
import Typewriter from '../Typewriter';

export function Landing(){
    const textArray = [
        "Hello! 👋",
        "I'm Michelle Yeoh.",
        "Aspiring Software/Web Developer."
    ]
    return(
        <div className="landing">
            <h2 style={{color:'black'}}><Typewriter textArray={textArray} delay={50} lineDelay={150} /></h2>
        </div>
    )
}