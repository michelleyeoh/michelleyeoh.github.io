import "../styles/about.css"
import myeoh_profile from '../images/myeoh_profile.png'
import github_icon from '../images/github_icon.png'
import linkedin_icon from '../images/linkedin_icon.png'
import { Link } from "react-router-dom"

export default function About(){
    return(
        <div className="about" id="about">
        <div className="box">
            <div className="leftCol">
                <img src={myeoh_profile} alt="myeoh_profile"/>
                <h2>About Me</h2>
                <h6>Hello, I’m Michelle!</h6>
                <h6>I am a first-year at UC Davis with goals to pursue a career in software development. I am currently majoring in <strong>computer science</strong>, with a minor in technology management. </h6>
                <h6>In addition to computer science, I also have a passion for <strong>UI/UX design</strong>. Sparked by my creative background in graphic design, I have been exploring web and mobile design.</h6>
                <h6>During my free time I like to spend time outside taking <strong>photos</strong>, studying at <strong>cafes</strong>, and going on <strong>runs</strong>. I am also a big fan of Korean music, so I will always be found listening to music or having a concert in my room…</h6>
                <br/>
            </div>
            <div className="rightCol">
                <h3>My Values</h3>
                <h4>💬 Communication</h4>
                <h6>Transparency fosters a collaborative environment of growing knowledge.</h6>
                <h4>👥 Collaboration</h4>
                <h6>Learning with and from one another.</h6>
                <h4>⚖️ Balance</h4>
                <h6>Finding a way to alleviate stress when navigating through challenging times.</h6>
                <br/>

                <h3>Recent Experiences</h3>
                <h6><strong>Technical Cohort</strong> at #include<br/><i>January 2024 - Present</i></h6>
                {/* <h6><strong>Instructor</strong> at The LEAGUE of Amazing Programmers<br/><i>May 2024 - Present</i></h6> */}
                <h6><strong>DI Fellowship</strong> at Davis Design Interactive<br/><i>April - May 2024</i></h6>
                <Link target={"_blank"} to="https://www.linkedin.com/in/myeoh/">
                    <img src={linkedin_icon} alt='linkedin_icon' style={{height:30, paddingRight:10}}/>
                </Link>
                <Link target={"_blank"} to="https://github.com/michelleyeoh">
                    <img src={github_icon} alt='github_icon' style={{height:30}}/>
                </Link>
            </div>
        </div>
        </div>
    )
}