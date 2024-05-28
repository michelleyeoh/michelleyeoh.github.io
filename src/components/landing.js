import "../styles/landing.css"
import Typewriter from '../Typewriter';

export function Landing(){
    const textArray = [
        "Hello!",
        "I'm Michelle Yeoh,",
        "a CS Student at UC Davis."
    ]
    return(
        <div className="landing">
            <h2 style={{color:'black'}}><Typewriter textArray={textArray} delay={50} lineDelay={150} /></h2>
        </div>
    )
}