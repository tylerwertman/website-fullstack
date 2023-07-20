import React, { useState } from 'react'
import homeDSG from './images/Home-DSG.svg'
import aboutDSG from './images/About-DSG.svg'
import blogDSG from './images/Blog-DSG.svg'
import projectsDSG from './images/Projects-DSG.svg'
import educationDSG from './images/Education-DSG.svg'
import contactDSG from './images/Contact-DSG.svg'
import homeLG from './images/Home-LG.svg'
import aboutLG from './images/About-LG.svg'
import blogLG from './images/Blog-LG.svg'
import projectsLG from './images/Projects-LG.svg'
import educationLG from './images/Education-LG.svg'
import contactLG from './images/Contact-LG.svg'

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
      <div id="navLinks" className={isNavOpen && windowWidth > 625 ? "navLinksL" : isNavOpen && darkMode ? "navLinksSEDark" : isNavOpen ? "navLinksSE" : "navLinks"} onClick={() => { setIsNavOpen(false) }}>
        <a className={hoveredElement === 0 ? 'shadowNav' : null} onMouseEnter={() => { hover(0) }} onMouseLeave={hover} href="/"><img src={hoveredElement === 0 ? homeLG : !darkMode ? homeDSG : homeLG} alt="home" /><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > "625px" ? "Home" : null}</span></a>
        <a className={hoveredElement === 1 ? 'shadowNav' : null} onMouseEnter={() => { hover(1) }} onMouseLeave={hover} href="#blog"><img src={hoveredElement === 1 ? blogLG : !darkMode ? blogDSG : blogLG} alt="blog" /><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > "625px" ? "Blog" : null}</span></a>
        <a className={hoveredElement === 2 ? 'shadowNav' : null} onMouseEnter={() => { hover(2) }} onMouseLeave={hover} href="#projects"><img src={hoveredElement === 2 ? projectsLG : !darkMode ? projectsDSG : projectsLG} alt="projects" /><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > "625px" ? "Projects" : null}</span></a>
        <a className={hoveredElement === 3 ? 'shadowNav' : null} onMouseEnter={() => { hover(3) }} onMouseLeave={hover} href="#education"><img src={hoveredElement === 3 ? educationLG : !darkMode ? educationDSG : educationLG} alt="education" /><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > "625px" ? "Education" : null}</span></a>
        <a className={hoveredElement === 4 ? 'shadowNav' : null} onMouseEnter={() => { hover(4) }} onMouseLeave={hover} href="#about"><img src={hoveredElement === 4 ? aboutLG : !darkMode ? aboutDSG : aboutLG} alt="about" /><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > "625px" ? "About" : null}</span></a>
        <a className={hoveredElement === 5 ? 'shadowNav' : null} onMouseEnter={() => { hover(5) }} onMouseLeave={hover} href="#contact"><img src={hoveredElement === 5 ? contactLG : !darkMode ? contactDSG : contactLG} alt="contact" /><span className={hoveredElement === 5 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth > "625px" ? "Contact" : null}</span></a>
      </div>
      <div id="hamburger" className="navLinksS">
        <a className="icon hover" onMouseEnter={hover} onMouseOut={hover} href={"#null"} onClick={miniNav}><i className="fa fa-bars" style={darkMode ? { color: "lightgrey" } : null}></i></a>&nbsp;
      </div>
    </nav>
  )
}

export default Nav