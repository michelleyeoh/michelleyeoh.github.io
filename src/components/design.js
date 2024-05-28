import "../styles/design.css"
import { ProjectCard } from "./projectCard"
import studypaws from '../images/studypaws.png'
import lockinoclock_landing from '../images/lockinoclock_landing.png'
import gelsigns from '../images/gelsigns.png'
import scrapbook from '../images/scrapbook.png'
import videos from '../images/videos.png'


export default function Design(){
    return(
        <design className="design" id="design">
            <h2>My Other Creative Outlet</h2>
            <ProjectCard title={"Study Paws"} description={"3-Week Design Sprint"} time={"April - May 2024"} tool={"Figma"} img={studypaws} linkTitle={"View Presentation →"} linkUrl={"https://docs.google.com/presentation/d/1B5F9787XCpr1xkZUSlaRgM72OGnxXgTO/edit?usp=drive_link"}/>
            <ProjectCard title={"Lock In O'Clock"} description={"24 Hour Hackathon"} time={"April 2024"} tool={"Figma, React.js, Node.js"} img={lockinoclock_landing} linkTitle={"View Devpost →"} linkUrl={"https://devpost.com/software/lock-in-o-clock"}/>
            <ProjectCard title={"Graphic Design"} description={"Personal Enjoyment"} time={"September 2018 - July 2022"} tool={"Procreate, Adobe Illustrator"} img={gelsigns} linkTitle={"View Logo Designs →"} linkUrl={"https://www.instagram.com/gelsigns"}/>
            <ProjectCard title={"Photo Journaling"} description={"Personal Enjoyment"} time={"June 2021 - Present"} tool={"Pen, Paper, Stickers"} img={scrapbook}/>
            <ProjectCard title={"Video Editing"} description={"Personal Enjoyment"} time={"March 2018 - November 2021"} tool={"iMovie"} img={videos} linkTitle={"View Youtube →"} linkTitle2={"View Instagram →"} linkUrl={"https://www.youtube.com/@salt4e/videos"} linkUrl2={"http://instagram.com/jelyslimes"}/>
        </design>
    )
}