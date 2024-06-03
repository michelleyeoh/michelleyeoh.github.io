import "../styles/projectCard.css"
import { Link } from "react-router-dom"

export function ProjectCard({title, description, time, tool, linkUrl, linkTitle, linkUrl2, linkTitle2, img}){
    return(
        <div className="rectangle">
            <div>
                <Link to={linkUrl} target={"_blank"} className="hover" title="Click To Learn More"><img src={img} alt={img}/></Link>
            </div>
            <h4><div style={{color: '#313F63'}}>{title}</div>{description}</h4>
        </div>
    )
}