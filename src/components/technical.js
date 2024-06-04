import "../styles/technical.css"
import { ProjectCard } from "./projectCard"
import jass_landing from '../images/jass_landing.png'
import deca_landing from '../images/deca_landing.png'
import campusconnect_landing from '../images/campusconnect_landing.png'
import minion_landing from '../images/minion_landing.png'
import timeseries_landing from '../images/timeseries_landing.png'
import { Landing } from "./landing"
import studypaws from '../images/studypaws.png'
import lockinoclock_landing from '../images/lockinoclock_landing.png'
import gelsigns from '../images/gelsigns.png'
import scrapbook from '../images/scrapbook.png'

export default function Technical(){
    return(
        <technical className="technical">
            <Landing/>
            <h2 id="technical">Recent Projects</h2>
            <div className="cardGroup">
                <ProjectCard title={"JASS"} description={"Client website for JASS @ UC Davis."} tool={"React.js + Next.js"} img={jass_landing} linkTitle={"In Progress"} linkUrl={"https://github.com/include-davis/jass-ws24"}/>
                <ProjectCard title={"Campus Connect"} description={"Social platform for SFSU students to voice community concerns."} tool={"React.js, Node.js, Firebase, mySQL, Sequelize, Express.js"} img={campusconnect_landing} linkTitle={"View Devpost ↗"} linkUrl={"https://devpost.com/software/campusconnect-orenh0"}/>
            </div>
            {/* <ProjectCard title={"DECA"} description={"A client website for DECA at UC Davis."} tool={"React.js + Node.js"} img={deca_landing} linkTitle={"In Progress"} linkUrl={"https://github.com/sohamk0524/DECA-information-website"}/> */}
            {/* <ProjectCard title={"Time-Series Forecasting"} description={"A time-series model that predicts airplane passenger count."} tool={"Python (pandas, seaborn, Matplotlib, Plotly, NumPy, SciPy, statsmodels)"} img={timeseries_landing} linkTitle={"View Presentation ↗"} linkUrl={"https://docs.google.com/presentation/d/13Gn8FUjrlsuypsWgiI9v6VZoiQY8acOq8UMfLgTDu8E/edit?usp=sharing"}/> */}
            <div className="cardGroup">
                <ProjectCard title={"Minion Bananaria"} description={"Multi-level restaurant cooking game."} tool={"Java Swing"} img={minion_landing} linkTitle={"View GitHub ↗"} linkUrl={"https://github.com/vidhitapde/MINIONBANANARIA_FINAL"}/>
            </div>
            <br id="design"/>
            <h2>My Creative Outlet</h2>
            <div className="cardGroup">
                <ProjectCard title={"Study Paws"} description={"Study application motivating consistent study habits."} tool={"Figma"} img={studypaws} linkTitle={"View Presentation ↗"} linkUrl={"https://docs.google.com/presentation/d/1B5F9787XCpr1xkZUSlaRgM72OGnxXgTO/edit?usp=drive_link"}/>
                <ProjectCard title={"Graphic Design"} description={"Drawing personalized logos for users."} tool={"Procreate, Adobe Illustrator"} img={gelsigns} linkTitle={"View Logo Designs ↗"} linkUrl={"https://www.instagram.com/gelsigns"}/>
            </div>
            <div className="cardGroup">
                <ProjectCard title={"Photo Journaling"} description={"Documenting moments through journal entries."} tool={"Pen, Paper, Stickers"} img={scrapbook}/>
            </div>
            {/* <ProjectCard title={"Lock In O'Clock"} description={"A web application for students to find their most compatible study buddy."} tool={"Figma, React.js, Node.js"} img={lockinoclock_landing} linkTitle={"View Devpost ↗"} linkUrl={"https://devpost.com/software/lock-in-o-clock"}/> */}
        </technical>
    )
}