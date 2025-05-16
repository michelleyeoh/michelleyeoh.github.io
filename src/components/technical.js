import "../styles/technical.css"
import { ProjectCard } from "./projectCard"
import jass_landing from '../images/jass_landing.png'
import deca_landing from '../images/deca_landing.png'
import campusconnect_landing from '../images/campusconnect_landing.png'
import minion_landing from '../images/minion_landing.png'
import timeseries_landing from '../images/timeseries_landing.png'
import { Landing } from "./landing"
import studypaws from '../images/studypaws.svg'
import lockinoclock_landing from '../images/lockinoclock_landing.png'
import gelsigns from '../images/gelsigns.svg'
import scrapbook from '../images/scrapbook.png'
import atmospheric from '../images/atmospheric.svg'
import fourth_and_hope from '../images/fourth_and_hope.png'
import hackdavis2025 from '../images/hackdavis2025.png'
import hackerhub from '../images/hackerhub.png'
import judge from '../images/judging.svg'

export default function Technical() {
    return (
        <technical>
            <Landing />
            <div className="technical" id="technical">
                <h2>Recent Projects</h2>
                <div className="cardGroup">
                    <ProjectCard title={"HackDavis Judging App"} description={"Judging app for HackDavis 2025."} img={judge} linkUrl={"https://hub.hackdavis.io/judges"} />
                    <ProjectCard title={"HackDavis HackerHub"} description={"All-things a hacker needs for HackDavis 2025."} img={hackerhub} linkUrl={"https://hub.hackdavis.io/"} />
                    <ProjectCard title={"HackDavis 2025"} description={"HackDavis 2025 Website."} img={hackdavis2025} linkUrl={"https://hackdavis.io/"} />
                    <ProjectCard title={"Fourth and Hope"} description={"Client website for Fourth and Hope."} img={fourth_and_hope} linkUrl={"https://fourth-and-hope-demo.vercel.app/"} />
                    <ProjectCard title={"Atmospheric"} description={"iOS app that generates personalized Spotify playlists based on the weather."} tool={"Swift"} img={atmospheric} linkTitle={"In Progress"} linkUrl={"https://github.com/michelleyeoh/Atmospheric"} />
                    {/* <ProjectCard title={"M-Mart"} description={"Ecommerce platform for buyers and sellers."} tool={"Ruby on Rails"} img={mmart_landing} linkTitle={"In Progress"} linkUrl={"https://github.com/michelleyeoh/M-Mart"}/> */}
                    <ProjectCard title={"JASS @ UC Davis"} description={"Client website for JASS @ UC Davis."} tool={"React.js + Next.js"} img={jass_landing} linkTitle={"In Progress"} linkUrl={"https://jassucd.vercel.app/"} />
                    <ProjectCard title={"CampusConnect"} description={"Social platform for SFSU students to voice community concerns."} tool={"React.js, Node.js, Firebase, mySQL, Sequelize, Express.js"} img={campusconnect_landing} linkTitle={"View Devpost ↗"} linkUrl={"https://devpost.com/software/campusconnect-orenh0"} />
                    {/* <ProjectCard title={"DECA at UC Davis"} description={"Client website for DECA at UC Davis."} tool={"React.js + Node.js"} img={deca_landing} linkTitle={"In Progress"} linkUrl={"https://decatest.vercel.app/"} /> */}
                    {/* <ProjectCard title={"Time-Series Forecasting"} description={"Time-series model that predicts airplane passenger count."} tool={"Python (pandas, seaborn, Matplotlib, Plotly, NumPy, SciPy, statsmodels)"} img={timeseries_landing} linkTitle={"View Presentation ↗"} linkUrl={"https://docs.google.com/presentation/d/13Gn8FUjrlsuypsWgiI9v6VZoiQY8acOq8UMfLgTDu8E/edit?usp=sharing"} /> */}
                    <ProjectCard title={"Minion Bananaria"} description={"Multi-level restaurant cooking game."} tool={"Java Swing"} img={minion_landing} linkTitle={"View GitHub ↗"} linkUrl={"https://github.com/vidhitapde/MINIONBANANARIA_FINAL"} />
                </div>
            </div>
            <div className="design" id="design">
                <h2>My Creative Outlet</h2>
                <div className="cardGroup">
                    <ProjectCard title={"StudyPaws"} description={"Study application motivating consistent study habits."} tool={"Figma"} img={studypaws} linkTitle={"View Presentation ↗"} linkUrl={"https://docs.google.com/presentation/d/1B5F9787XCpr1xkZUSlaRgM72OGnxXgTO/edit?usp=drive_link"} />
                    <ProjectCard title={"Lock In O'Clock"} description={"Helping students find their most compatible study buddy."} tool={"Figma, React.js, Node.js"} img={lockinoclock_landing} linkTitle={"View Devpost ↗"} linkUrl={"https://devpost.com/software/lock-in-o-clock"} />
                    <ProjectCard title={"Graphic Design"} description={"Drawing personalized logos for users."} tool={"Procreate, Adobe Illustrator"} img={gelsigns} linkTitle={"View Logo Designs ↗"} linkUrl={"https://www.instagram.com/gelsigns"} />
                    <ProjectCard title={"Photo Journaling"} description={"Documenting moments through journal entries."} tool={"Pen, Paper, Stickers"} img={scrapbook} />
                </div>

            </div>
        </technical>
    )
}