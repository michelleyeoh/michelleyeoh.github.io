import "../styles/about.css"
import myeoh_profile from '../images/myeoh_profile.png'

export default function About(){
    return(
        <div className="about">
        <div className="box">
            <div className="leftCol">
                <img src={myeoh_profile} alt="myeoh_profile" width={'250px'}/>
                <h3>About Me</h3>
                <h6>Hello, I’m Michelle!</h6>
                <h6>I am a first-year at UC Davis with goals to pursue a career in software development. I am currently majoring in computer science, with a minor in technology management. </h6>
                <h6>In addition to computer science, I also have a passion for UI/UX design. Sparked by my creative background in graphic design, I am also diving into web and mobile design.</h6>
                <h6>During my free time like to spend time outside, taking photos and going on runs. I am also a big fan of Korean music, so I will always be found listening to music or having a concert in my room…</h6>
                <br/>

                <h3>Links</h3>
            </div>
            <div className="rightCol">
                <h3>My Values</h3>
                <h4>💬 Communication</h4>
                <h6>Without communication, there is no team. Being transparent with one another will allow a collaborative environment where growth and knowledge can grow.</h6>
                <h4>⚖️ Balance</h4>
                <h6>Just like in nature, balance should also be reflected in other aspects. Work life, mental health, and physical health balance are all important when navigating through life. Finding a way to alleviate stress is important to regulate emotions.</h6>
                <br/>

                <h3>Recent Experiences</h3>
                <h6><strong>Technical Cohort</strong> at #include<br/><i>January 2024 - Present</i></h6>
                <h6><strong>Instructor</strong> at The LEAGUE of Amazing Programmers<br/><i>May 2024 - Present</i></h6>
                <h6><strong>DI Fellowship</strong> at Davis Design Interactive<br/><i>April - May 2024</i></h6>
            </div>
        </div>
        </div>
    )
}