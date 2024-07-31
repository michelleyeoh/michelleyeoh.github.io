import { useState } from "react"
import "../styles/header.css"

export default function Header(){

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= window.innerHeight){
            setColor(true)
        } else if (window.location.hash==='#about'){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return(
        <header className={color ? 'header-bg' :'header'}>
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