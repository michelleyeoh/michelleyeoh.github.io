import "../styles/header.css"

export default function Header(){
    return(
        <header className="header">
            <nav>
                <a href="#technical">TECHNICAL</a>
                <a href="#design">DESIGN</a>
                <a href="/#about">ABOUT</a>
                {/* <a href="/#/technical">TECHNICAL</a>
                <a href="/#/design">DESIGN</a> */}
                {/* <a href="/#/about">ABOUT</a> */}
            </nav>
        </header>
    )
}