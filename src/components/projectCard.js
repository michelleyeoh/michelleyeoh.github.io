import "../styles/projectCard.css"
import { Link } from "react-router-dom"

export function ProjectCard({title, description, time, tool, linkUrl, linkTitle, img}){
    return(
        <div className="rectangle">
            <div className="column">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{time}</p>
                <p>{tool}</p>
                <Link to={linkUrl} className="link">{linkTitle}</Link>
            </div>
            <div className="column">
                <img src={img} alt={img} width={'400px'}/>
            </div>
        </div>
    )
}