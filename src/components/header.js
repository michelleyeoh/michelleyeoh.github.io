// import { useState } from "react"
import { Link } from "react-router-dom"
import github_icon from '../images/github_icon.png'
import linkedin_icon from '../images/linkedin_icon.png'
import "../styles/header.css"

export default function Header(){
    return (
        <header>
            <nav className="header2">
                <div className="header2_left">
                    <a href="#technical">TECHNICAL</a>
                    <a href="#design">DESIGN</a>
                    <a href="/#about">ABOUT</a>
                </div>
                <div className="header2_center">
                    <a href="/">MICHELLE YEOH</a>
                </div>
                <div className="header2_right">
                    <Link target={"_blank"} to="https://www.linkedin.com/in/myeoh/">
                        <img src={linkedin_icon} alt='linkedin_icon' />
                    </Link>
                    <Link target={"_blank"} to="https://github.com/michelleyeoh">
                        <img src={github_icon} alt='github_icon'/>
                    </Link>
                </div>
            </nav>
        </header>
    )
    // const [color, setColor] = useState(false);
    // const changeColor = () => {
    //     if(window.scrollY >= window.innerHeight){
    //         setColor(true)
    //     } else if (window.location.hash==='#about'){
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }
    // window.addEventListener('scroll', changeColor)
    // return(
    //     <header className={color ? 'header-bg' :'header'}>
    //         <nav>
    //             <a href="#technical">TECHNICAL</a>
    //             <a href="#design">DESIGN</a>
    //             <a href="/#about">ABOUT</a>
    //             {/* <a href="/#/technical">TECHNICAL</a>
    //             <a href="/#/design">DESIGN</a> */}
    //             {/* <a href="/#/about">ABOUT</a> */}
    //         </nav>
    //     </header>
    // )
}