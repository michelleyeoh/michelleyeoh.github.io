import "../styles/projectCard.css"
import { Link } from "react-router-dom"

export function ProjectCard({title, description, time, tool, linkUrl, linkTitle, linkUrl2, linkTitle2, img}){
    return(
        <div className="rectangle">
            <div className="column">
                <h1 style={{lineHeight:'70px'}}>{title}</h1>
                <p>{description}</p>
                <p>{time}</p>
                <p>{tool}</p>
                <br/>
                <Link to={linkUrl} className="link">{linkTitle}</Link>
                <br/>
                <Link to={linkUrl2} target={"_blank"} className="link">{linkTitle2}</Link>
            </div>
            <div className="column">
                <img src={img} alt={img} height={'250px'}/>
            </div>
        </div>
    )
}