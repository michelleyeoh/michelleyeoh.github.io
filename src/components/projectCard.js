import "../styles/projectCard.css"
import { Link } from "react-router-dom"

export function ProjectCard({ title, description, time, tool, linkUrl, linkTitle, linkUrl2, linkTitle2, img }) {
    return (
        <div className="rectangle">
            <Link to={linkUrl} target={"_blank"} className="hover" title="Click To Learn More"><img src={img} alt={img} /></Link>
            <div className="text_align">
                <h4 style={{ color: '#313F63', margin: "0" }}>{title}</h4>
                <p style={{ margin: "0" }}>{description}</p>
            </div>

        </div>
    )
}