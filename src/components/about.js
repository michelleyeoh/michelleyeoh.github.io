import "../styles/about.css"
import myeoh_profile from '../images/myeoh_profile.png'
import github_icon from '../images/github_icon.png'
import linkedin_icon from '../images/linkedin_icon.png'
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="box">
                <div className="leftCol">
                    <img src={myeoh_profile} alt="myeoh_profile" />
                    <h3>Recent Experiences</h3>
                    <h6><strong>Software Development Engineer Intern</strong> at Amazon<br /><i>Summer 2025</i></h6>
                    <h6><strong>Technical Director</strong> at HackDavis<br /><i>June 2024 - Present</i></h6>
                    {/* <h6><strong>Instructor</strong> at The LEAGUE of Amazing Programmers<br/><i>May 2024 - Present</i></h6> */}
                    <h6><strong>Technical Lead</strong> at #include<br /><i>May 2024 - March 2025</i></h6>
                    <h6><strong>Design Director</strong> at Women in Computer Science<br /><i>May 2024 - Present</i></h6>
                    <h6><strong>Technical Cohort</strong> at #include<br /><i>January - June 2024</i></h6>
                    {/* <h6><strong>DI Fellowship</strong> at Davis Design Interactive<br /><i>April - May 2024</i></h6> */}

                    <Link target={"_blank"} to="https://www.linkedin.com/in/myeoh/">
                        <img src={linkedin_icon} alt='linkedin_icon' style={{ height: 30, paddingRight: 10 }} />
                    </Link>
                    <Link target={"_blank"} to="https://github.com/michelleyeoh">
                        <img src={github_icon} alt='github_icon' style={{ height: 30 }} />
                    </Link>

                </div>
                <div className="rightCol">
                    {/* <h3>My Values</h3>
                <h4>💬 Communication</h4>
                <h6>Transparency fosters a collaborative environment of growing knowledge.</h6>
                <h4>👥 Collaboration</h4>
                <h6>Learning with and from one another.</h6>
                <h4>⚖️ Balance</h4>
                <h6>Finding a way to alleviate stress when navigating through challenging times.</h6>
                <br/> */}
                    <h2>About Me</h2>
                    <h6>Hello, I’m Michelle!</h6>
                    <h6>I am a second-year at UC Davis with goals to pursue a career in software development. I am currently majoring in <strong>computer science</strong>, with a minor in technology management. </h6>
                    <h6>Sparked by my creative background in graphic design, I am also exploring <strong>UI/UX design</strong> for web and mobile devices.</h6>
                    <h6>During my free time I like to spend time outside taking <strong>photos</strong>, studying at <strong>cafes</strong>, and going on <strong>runs</strong>. I also enjoy Korean music, so I will be found either listening to K-Pop or having a solo concert in my room…</h6>
                    <br />

                </div>
            </div>
        </div>
    )
}