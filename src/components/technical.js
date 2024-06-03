import "../styles/technical.css"
import { ProjectCard } from "./projectCard"
import jass_landing from '../images/jass_landing.png'
import deca_landing from '../images/deca_landing.png'
import campusconnect_landing from '../images/campusconnect_landing.png'
import minion_landing from '../images/minion_landing.png'
import timeseries_landing from '../images/timeseries_landing.png'
import { Landing } from "./landing"

export default function Technical(){
    return(
        <technical className="technical">
            <Landing/>
            <h2 id="technical">Explore my Projects</h2>
            <ProjectCard title={"JASS"} description={"A client website for JASS @ UC Davis."} tool={"React.js + Next.js"} img={jass_landing} linkTitle={"In Progress"} linkUrl={"https://github.com/include-davis/jass-ws24"}/>
            <ProjectCard title={"DECA"} description={"A client website for DECA at UC Davis."} tool={"React.js + Node.js"} img={deca_landing} linkTitle={"In Progress"} linkUrl={"https://github.com/sohamk0524/DECA-information-website"}/>
            <ProjectCard title={"Campus Connect"} description={"A social platform for SFSU students to voice community concerns."} tool={"React.js, Node.js, Firebase, mySQL, Sequelize, Express.js"} img={campusconnect_landing} linkTitle={"View Devpost ↗"} linkUrl={"https://devpost.com/software/campusconnect-orenh0"}/>
            <ProjectCard title={"Time-Series Forecasting"} description={"A time-series model that predicts airplane passenger count."} tool={"Python (pandas, seaborn, Matplotlib, Plotly, NumPy, SciPy, statsmodels)"} img={timeseries_landing} linkTitle={"View Presentation ↗"} linkUrl={"https://docs.google.com/presentation/d/13Gn8FUjrlsuypsWgiI9v6VZoiQY8acOq8UMfLgTDu8E/edit?usp=sharing"}/>
            <ProjectCard title={"Minion Bananaria"} description={"A multi-level restaurant cooking game."} tool={"Java Swing"} img={minion_landing} linkTitle={"View GitHub ↗"} linkUrl={"https://github.com/vidhitapde/MINIONBANANARIA_FINAL"}/>
        </technical>
    )
}