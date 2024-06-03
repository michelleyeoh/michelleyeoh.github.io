import "../styles/design.css"
import { ProjectCard } from "./projectCard"
import studypaws from '../images/studypaws.png'
import lockinoclock_landing from '../images/lockinoclock_landing.png'
import gelsigns from '../images/gelsigns.png'
import scrapbook from '../images/scrapbook.png'
// import videos from '../images/videos.png'


export default function Design(){
    return(
        <design className="design" id="design">
            <h2>My Other Creative Outlet</h2>
            <ProjectCard title={"Study Paws"} description={"A mobile study application that meets the needs of a college student."} tool={"Figma"} img={studypaws} linkTitle={"View Presentation ↗"} linkUrl={"https://docs.google.com/presentation/d/1B5F9787XCpr1xkZUSlaRgM72OGnxXgTO/edit?usp=drive_link"}/>
            <ProjectCard title={"Lock In O'Clock"} description={"A web application for students to find their most compatible study buddy."} tool={"Figma, React.js, Node.js"} img={lockinoclock_landing} linkTitle={"View Devpost ↗"} linkUrl={"https://devpost.com/software/lock-in-o-clock"}/>
            <ProjectCard title={"Graphic Design"} description={"Designing personalized logos for clients."} tool={"Procreate, Adobe Illustrator"} img={gelsigns} linkTitle={"View Logo Designs ↗"} linkUrl={"https://www.instagram.com/gelsigns"}/>
            <ProjectCard title={"Photo Journaling"} description={"Documenting moments through creative journal entries."} tool={"Pen, Paper, Stickers"} img={scrapbook}/>
            {/* <ProjectCard title={"Video Editing"} description={"Personal Enjoyment"} time={"March 2018 - November 2021"} tool={"iMovie"} img={videos} linkTitle={"View Youtube →"} linkTitle2={"View Instagram →"} linkUrl={"https://www.youtube.com/@salt4e/videos"} linkUrl2={"http://instagram.com/jelyslimes"}/> */}
        </design>
    )
}