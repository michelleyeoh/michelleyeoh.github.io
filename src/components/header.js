import "../styles/header.css"
// import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <nav>
                {/* <NavLink to="/">HOME</NavLink> */}
                <a href="/#/technical">TECHNICAL</a>
                <a href="/#/design">DESIGN</a>
                <a href="/#/about">ABOUT</a>
            </nav>
        </header>
    )
}