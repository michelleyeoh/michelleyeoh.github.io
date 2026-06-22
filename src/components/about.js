import "../styles/about.css"
import myeoh_profile from '../images/myeoh_profile.png'
import github_icon from '../images/github_icon.png'
import linkedin_icon from '../images/linkedin_icon.png'
import amex_logo from '../images/amex_logo.jpeg'
import aggieworks_logo from '../images/aggieworks_logo.jpeg'
import amazon_web_services_logo from '../images/amazon_web_services_logo.jpeg'
import hackdavis_logo from '../images/hackdavis_logo.jpeg'
import includedavis_logo from '../images/includedavis_logo.jpeg'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}>
            <div className="about" id="about">
                <img src={myeoh_profile} alt="myeoh_profile" className="profile" />
                <div className="container">
                    <div className="half">
                        <h2>About Me</h2>
                        <h6>Hello, I’m Michelle!</h6>
                        <h6>I am a fourth-year at UC Davis pursuing a career in software development. I am majoring in <strong>computer science</strong>, with a minor in <strong>technology management</strong>. </h6>
                        <h6>I have varying experiences in <strong>full-stack</strong> web development through opportunities on campus such as AggieWorks, HackDavis, #include, and creating client websites. In addition, I have a creative background in graphic design and have explored <strong>UI/UX design</strong> in the past.</h6>
                        <h6>In my spare time, I like to spend time outside taking <strong>photos</strong>, studying at <strong>cafes</strong>, and going on <strong>runs</strong>. I also enjoy music, so I will be found either listening to K-pop or having a solo concert in my room…</h6>
                    </div>
                    <div className="half">
                        <h3>Recent Experiences</h3>
                        <h6 className="experience">
                            <img src={amex_logo} alt="amex_logo" />
                            <span>
                                <strong>Software Engineer Intern</strong> at American Express
                                <br />
                                <i>Summer 2026</i>
                            </span>
                        </h6>
                        <h6 className="experience">
                            <img src={aggieworks_logo} alt="aggieworks_logo" />
                            <span>
                                <strong>Software Engineer</strong> at AggieWorks
                                <br />
                                <i>April 2026 - Present</i>
                            </span>
                        </h6>
                        <h6 className="experience">
                            <img src={amazon_web_services_logo} alt="amazon_web_services_logo" />
                            <span>
                                <strong>Software Development Engineer Intern</strong> at Amazon Web Services
                                <br />
                                <i>Summer 2025</i>
                            </span>
                        </h6>
                        <h6 className="experience">
                            <img src={hackdavis_logo} alt="hackdavis_logo" />
                            <span>
                                <strong>Technical Lead</strong> at HackDavis
                                <br />
                                <i>April 2025 - May 2026</i>
                                <br /> - <br />
                                <strong>Technical Director</strong> at HackDavis
                                <br />
                                <i>June 2024 - April 2024</i>
                            </span>
                        </h6>
                        <h6 className="experience">
                            <img src={includedavis_logo} alt="include_logo" />
                            <span>
                                <strong>Technical Lead</strong> at #include
                                <br />
                                <i>May 2024 - March 2025</i>
                                <br /> - <br /> 
                                <strong>Technical Cohort</strong>
                                <br />
                                <i>January - June 2024</i>
                            </span>
                        </h6>

                        {/* <h6><strong>Design Director</strong> at Women in Computer Science<br /><i>May 2024 - June 2025</i></h6> */}
                        {/* <h6><strong>DI Fellowship</strong> at Davis Design Interactive<br /><i>April - May 2024</i></h6> */}
                        <Link target={"_blank"} to="https://www.linkedin.com/in/myeoh/">
                            <img src={linkedin_icon} alt='linkedin_icon' style={{ height: 30, paddingRight: 10 }} />
                        </Link>
                        <Link target={"_blank"} to="https://github.com/michelleyeoh">
                            <img src={github_icon} alt='github_icon' style={{ height: 30 }} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}