import React, { useState } from 'react'
import me from './images/me.png'
import linkedinDSG from './images/Bootstrap-Icons/Linkedin-fill-DSG.svg'
import linkedinLG from './images/Bootstrap-Icons/Linkedin-fill-LG.svg'
import linkedinSG from './images/Bootstrap-Icons/Linkedin-fill-SG.svg'
import githubDSG from './images/Bootstrap-Icons/Github-fill-DSG.svg'
import githubLG from './images/Bootstrap-Icons/Github-fill-LG.svg'
import githubSG from './images/Bootstrap-Icons/Github-fill-SG.svg'
import mediumDSG from './images/Bootstrap-Icons/Medium-fill-DSG.svg'
import mediumLG from './images/Bootstrap-Icons/Medium-fill-LG.svg'
import mediumSG from './images/Bootstrap-Icons/Medium-fill-SG.svg'
import fileDSG from './images/FontAwesome-Icons/file-pdf-solid-DSG.svg'
import fileLG from './images/FontAwesome-Icons/file-pdf-solid-LG.svg'
import fileSG from './images/FontAwesome-Icons/file-pdf-solid-SG.svg'

const Intro = (props) => {
    const { darkMode } = props

    const [hoveredElement, setHoveredElement] = useState(null)

    const hover = (index) => {
        // e.stopPropagation();
        // console.log("hover running")
        setHoveredElement(index)
        // console.log(index)
    }

    return (
        <div className={darkMode ? "section homeDark" : "section home"} id="home">
            <div id="introOne">
                <img src={me} alt="tyler, website owner" />
                <h2>Tyler Wertman</h2><br />
                <h4>Developer & Entrepreneur</h4>
            </div>
            <div id={darkMode ? "introTwoDark" : "introTwo"}>
                <br /><h2>Hello, I am Tyler and I am a full-stack web developer</h2><br />
                <div id={darkMode ? "iconsDark" : "icons"}>
                    <a href="https://www.linkedin.com/in/tyler-wertman/" target="_blank noopener noreferrer" rel="noreferrer"><img className={hoveredElement === 0 ? "shadow" : null} onMouseEnter={() => { hover(0) }} onMouseOut={hover} src={hoveredElement === 0 ? linkedinSG : darkMode ? linkedinLG : linkedinDSG} alt="linkedin" /></a>
                    <a href="https://github.com/tylerwertman" target="_blank noopener noreferrer" rel="noreferrer"><img className={hoveredElement === 1 ? "shadow" : null} onMouseEnter={() => { hover(1) }} onMouseOut={hover} src={hoveredElement === 1 ? githubSG : darkMode ? githubLG : githubDSG} alt="github" /></a>
                    <a href="https://medium.com/@tylerwertman" target="_blank noopener noreferrer"><img className={hoveredElement === 3 ? "shadow" : null} onMouseEnter={() => { hover(3) }} onMouseOut={hover} src={hoveredElement === 3 ? mediumSG : darkMode ? mediumLG : mediumDSG} alt="Medium"/></a>
                    <a href="/resume.pdf" download="Tyler Wertman Resume"><img className={hoveredElement === 2 ? "shadow" : null} onMouseEnter={() => { hover(2) }} onMouseOut={hover} src={hoveredElement === 2 ? fileSG : darkMode ? fileLG : fileDSG} alt="file" /></a>
                    {/* <a href="https://www.etsy.com/shop/TylersTechSpace" target="_blank noopener noreferrer"><img src="./images/Etsy-fill-DSG.svg" alt="Etsy"/></a> */}
                    {/* <a href="https://www.youtube.com/@synergystyles" target="_blank noopener noreferrer"><img src="./images/Youtube-fill-DSG.svg" alt="Youtube"/></a> */}
                    {/* <a href="#" target="_blank noopener noreferrer"><img src="./images/Spotify-fill-DSG.svg" alt="Spotify"/></a> */}
                    {/* <a href="https://ko-fi.com/tyler510" target="_blank noopener noreferrer"><img src="./images/Kofi-fill-DSG.svg" alt="Kofi"/></a> */}
                </div>
            </div>
        </div>
    )
}

export default Intro