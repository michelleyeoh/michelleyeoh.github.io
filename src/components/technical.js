import "../styles/technical.css"
import { ProjectCard } from "./projectCard"
import jass_landing from '../images/jass_landing.png'
import deca_landing from '../images/deca_landing.png'
import campusconnect_landing from '../images/campusconnect_landing.png'
import minion_landing from '../images/minion_landing.png'
import timeseries_landing from '../images/timeseries_landing.png'

export default function Technical(){
    return(
        <technical className="technical">
            <h2>Explore my Projects</h2>
            <ProjectCard title={"JASS"} description={"#include Technical Cohort"} time={"March 2024 - Present"} tool={"React.js + Next.js"} img={jass_landing} linkTitle={"In Progress"}/>
            <ProjectCard title={"DECA at UC Davis"} description={"Web Developer"} time={"March 2024 - Present"} tool={"React.js + Node.js"} img={deca_landing} linkTitle={"View GitHub →"}/>
            <ProjectCard title={"Campus Connect"} description={"48 Hour Hackathon"} time={"April 2024"} tool={"React.js, Node.js, Firebase, mySQL, Sequelize, Express.j"} img={campusconnect_landing} linkTitle={"View Devpost →"}/>
            <ProjectCard title={"Minion Bananaria"} description={"AP CSA Final Project"} time={"May - June 2023"} tool={"Java Swing"} img={minion_landing} linkTitle={"View GitHub →"}/>
            <ProjectCard title={"Time-Series Forecasting"} description={"Davis Data Science Club"} time={"January - March 2024"} tool={"Python"} img={timeseries_landing} linkTitle={"View Presentation →"}/>
        </technical>
    )
}