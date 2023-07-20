import React, { useState } from 'react'
import homeDSG from './images/Bootstrap-Icons/Home-DSG.svg'
import homeLG from './images/Bootstrap-Icons/Home-LG.svg'
import blogDSG from './images/Bootstrap-Icons/Blog-DSG.svg'
import blogLG from './images/Bootstrap-Icons/Blog-LG.svg'
import projectsDSG from './images/Bootstrap-Icons/Projects-DSG.svg'
import projectsLG from './images/Bootstrap-Icons/Projects-LG.svg'
import educationDSG from './images/Bootstrap-Icons/Education-DSG.svg'
import educationLG from './images/Bootstrap-Icons/Education-LG.svg'
import aboutDSG from './images/Bootstrap-Icons/About-DSG.svg'
import aboutLG from './images/Bootstrap-Icons/About-LG.svg'
import contactDSG from './images/Bootstrap-Icons/Contact-DSG.svg'
import contactLG from './images/Bootstrap-Icons/Contact-LG.svg'
import barsLG from './images/FontAwesome-Icons/bars-solid-LG.svg'
import barsDSG from './images/FontAwesome-Icons/bars-solid-DSG.svg'
import xLG from './images/FontAwesome-Icons/xmark-solid-LG.svg'
import xDSG from './images/FontAwesome-Icons/xmark-solid-DSG.svg'

const Nav = (props) => {
  const { darkMode, windowWidth } = props
  const [hoveredElement, setHoveredElement] = useState(null)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const hover = (index) => {
    setHoveredElement(index)
  }

  const miniNav = () => {
    setIsNavOpen(!isNavOpen)
    console.log("miniNav")
  }

  return (
    <nav className={darkMode ? "navDark" : "nav"}>
      <h1><a href="/">Tyler Wertman Developments</a></h1>
      <div id="navLinks" className={windowWidth > 625 ? "navLinksL" : isNavOpen && darkMode ? "navLinksSEDark" : isNavOpen ? "navLinksSE" : "navLinksL"} onClick={() => { setIsNavOpen(false) }}>
        <a className={hoveredElement === 0 ? 'shadowNav' : null} onMouseEnter={() => { hover(0) }} onMouseLeave={hover} href="/"><img src={hoveredElement === 0 ? homeLG : !darkMode ? homeDSG : homeLG} alt="home" /><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > 625 ? "Home" : null}</span></a>
        <a className={hoveredElement === 1 ? 'shadowNav' : null} onMouseEnter={() => { hover(1) }} onMouseLeave={hover} href="#blog"><img src={hoveredElement === 1 ? blogLG : !darkMode ? blogDSG : blogLG} alt="blog" /><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > 625 ? "Blog" : null}</span></a>
        <a className={hoveredElement === 2 ? 'shadowNav' : null} onMouseEnter={() => { hover(2) }} onMouseLeave={hover} href="#projects"><img src={hoveredElement === 2 ? projectsLG : !darkMode ? projectsDSG : projectsLG} alt="projects" /><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > 625 ? "Projects" : null}</span></a>
        <a className={hoveredElement === 3 ? 'shadowNav' : null} onMouseEnter={() => { hover(3) }} onMouseLeave={hover} href="#education"><img src={hoveredElement === 3 ? educationLG : !darkMode ? educationDSG : educationLG} alt="education" /><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > 625 ? "Education" : null}</span></a>
        <a className={hoveredElement === 4 ? 'shadowNav' : null} onMouseEnter={() => { hover(4) }} onMouseLeave={hover} href="#about"><img src={hoveredElement === 4 ? aboutLG : !darkMode ? aboutDSG : aboutLG} alt="about" /><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > 625 ? "About" : null}</span></a>
        <a className={hoveredElement === 5 ? 'shadowNav' : null} onMouseEnter={() => { hover(5) }} onMouseLeave={hover} href="#contact"><img src={hoveredElement === 5 ? contactLG : !darkMode ? contactDSG : contactLG} alt="contact" /><span className={hoveredElement === 5 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > 625 ? "Contact" : null}</span></a>
      </div>
      <div id="hamburger" className="navLinksS">
        <a className="icon hover" onMouseEnter={hover} onMouseOut={hover} href={"#null"} onClick={miniNav}><img src={isNavOpen && darkMode ? xLG : isNavOpen ? xDSG : darkMode ? barsLG : barsDSG} alt="bars" width="20px"/></a>&nbsp;
      </div>
    </nav>
  )
}

export default Nav