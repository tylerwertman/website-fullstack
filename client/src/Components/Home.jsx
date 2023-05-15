import React, {useState} from 'react'
import me from './images/me.png'
import linkedin from './images/Linkedin-fill-DSG.svg'
import github from './images/Github-fill-DSG.svg'
import file from './images/File-fill-DSG.svg'
import linkedinH from './images/Linkedin-fill-SG.svg'
import githubH from './images/Github-fill-SG.svg'
import fileH from './images/File-fill-SG.svg'

const Home = (props) => {
    const {darkMode} = props

    const [hoveredElement, setHoveredElement] = useState(null)

    const hover = (index) => {
        // e.stopPropagation();
        console.log("hover running")
        setHoveredElement(index)
        // console.log(index)
    }
    
    return (
        <div className="section" id={darkMode?"homeDark":"home"}>
            <div id="introOne">
                <img src={me} alt="tyler, website owner" />
                <h2>Tyler Wertman</h2><br />
                <h4>Developer & Entrepreneur</h4>
            </div>
            <div id={darkMode?"introTwoDark":"introTwo"}>
                <br /><h2>Hello, I am Tyler and I am a full-stack web developer</h2><br />
                <div id="icons">
                    <a href="https://www.linkedin.com/in/tyler-wertman/" target="_blank noopener noreferrer" rel="noreferrer"><img className={hoveredElement === 0 ? "shadow" : ""} onMouseEnter={()=>{hover(0)}} onMouseOut={hover} src={hoveredElement === 0 ? linkedinH : linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/tylerwertman" target="_blank noopener noreferrer" rel="noreferrer"><img className={hoveredElement === 1 ? "shadow" : ""} onMouseEnter={()=>{hover(1)}} onMouseOut={hover} src={hoveredElement === 1 ? githubH : github} alt="github" /></a>
                    <a href="./resume.pdf" target="_blank noopener noreferrer" download="Tyler Wertman Resume"><img className={hoveredElement === 2 ? "shadow" : ""} onMouseEnter={()=>{hover(2)}} onMouseOut={hover} src={hoveredElement === 2 ? fileH : file} alt="file" /></a>
                    {/* <a href="#" target="_blank noopener noreferrer"><img src="./images/Medium-fill-DSG.svg" alt="Medium"/></a> */}
                    {/* <a href="https://www.etsy.com/shop/TylersTechSpace" target="_blank noopener noreferrer"><img src="./images/Etsy-fill-DSG.svg" alt="Etsy"/></a> */}
                    {/* <a href="https://www.youtube.com/@synergystyles" target="_blank noopener noreferrer"><img src="./images/Youtube-fill-DSG.svg" alt="Youtube"/></a> */}
                    {/* <a href="#" target="_blank noopener noreferrer"><img src="./images/Spotify-fill-DSG.svg" alt="Spotify"/></a> */}
                    {/* <a href="https://ko-fi.com/tyler510" target="_blank noopener noreferrer"><img src="./images/Kofi-fill-DSG.svg" alt="Kofi"/></a> */}
                </div>
            </div>
        </div>
    )
}

export default Home