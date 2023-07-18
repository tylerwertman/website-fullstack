import React, { useState, useEffect } from 'react'
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
  const { darkMode } = props
  const [hoveredElement, setHoveredElement] = useState(null)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // console.log(welcome)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const hover = (index) => {
    setHoveredElement(index)
  }

  const miniNav = () => {
    setIsNavOpen(!isNavOpen)
    console.log("miniNav")
  }

  return (
    <nav className={darkMode ? "navDark" : null}>
      <h1><a href="/">Tyler Wertman Developments</a></h1>
      <div id="navLinksL">
        <a className={hoveredElement === 0 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(0) }} onMouseLeave={hover} href="https://tylerw.xyz#home"><img src={hoveredElement === 0 ? homeLG : hoveredElement === 0 && darkMode ? homeLG : !darkMode ? homeDSG : homeLG} alt="home" /><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth>550 ? "Home" : ""}</span></a>
        <a className={hoveredElement === 1 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(1) }} onMouseLeave={hover} href="https://tylerw.xyz#about"><img src={hoveredElement === 1 ? aboutLG : !darkMode ? aboutDSG : aboutLG} alt="about" /><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth>550 ? "About" : ""}</span></a>
        <a className={hoveredElement === 2 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(2) }} onMouseLeave={hover} href="https://tylerw.xyz#blog"><img src={hoveredElement === 2 ? blogLG : !darkMode ? blogDSG : blogLG} alt="blog" /><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth>550 ? "Blog" : ""}</span></a>
        <a className={hoveredElement === 3 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(3) }} onMouseLeave={hover} href="https://tylerw.xyz#projects"><img src={hoveredElement === 3 ? projectsLG : !darkMode ? projectsDSG : projectsLG} alt="projects" /><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth>550 ? "Projects" : ""}</span></a>
        <a className={hoveredElement === 4 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(4) }} onMouseLeave={hover} href="https://tylerw.xyz#education"><img src={hoveredElement === 4 ? educationLG : !darkMode ? educationDSG : educationLG} alt="education" /><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth>550 ? "Education" : ""}</span></a>
        <a className={hoveredElement === 5 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(5) }} onMouseLeave={hover} href="https://tylerw.xyz#contact"><img src={hoveredElement === 5 ? contactLG : !darkMode ? contactDSG : contactLG} alt="contact" /><span className={hoveredElement === 5 ? 'navLiHover' : 'hidden'}>&nbsp;{windowWidth>550 ? "Contact" : ""}</span></a>
      </div>
      <div id="navLinksS">
        <a className="icon hover" onMouseEnter={hover} onMouseOut={hover} href={"#null"} onClick={miniNav}><i className="fa fa-bars" style={darkMode ? { color: "lightgrey" } : null}></i></a>&nbsp;
      </div>
      <div id="navLinksSE" className={isNavOpen && darkMode ? "navLinksSEDark" : isNavOpen ? "navLinksSE" : "navLinksSE hide"} onClick={() => { setIsNavOpen(false) }}>
        <a className={hoveredElement === 0 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(0) }} onMouseLeave={hover} href={"https://tylerw.xyz#home"}><img src={hoveredElement === 0 ? homeLG : hoveredElement === 0 && darkMode ? homeLG : !darkMode ? homeDSG : homeLG} alt="home" /><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}></span></a>&nbsp;
        <a className={hoveredElement === 1 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(1) }} onMouseLeave={hover} href={"https://tylerw.xyz#about"}><img src={hoveredElement === 1 ? aboutDSG : hoveredElement === 1 && darkMode ? aboutLG : !darkMode ? aboutDSG : aboutLG} alt="about" /><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}></span></a>&nbsp;
        <a className={hoveredElement === 2 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(2) }} onMouseLeave={hover} href={"https://tylerw.xyz#blog"}><img src={hoveredElement === 2 ? blogDSG : hoveredElement === 2 && darkMode ? blogLG : !darkMode ? blogDSG : blogLG} alt="blog" /><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}></span></a>&nbsp;
        <a className={hoveredElement === 3 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(3) }} onMouseLeave={hover} href={"https://tylerw.xyz#projects"}><img src={hoveredElement === 3 ? projectsDSG : hoveredElement === 3 && darkMode ? projectsLG : !darkMode ? projectsDSG : projectsLG} alt="projects" /><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}></span></a>&nbsp;
        <a className={hoveredElement === 4 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(4) }} onMouseLeave={hover} href={"https://tylerw.xyz#education"}><img src={hoveredElement === 4 ? educationDSG : hoveredElement === 4 && darkMode ? educationLG : !darkMode ? educationDSG : educationLG} alt="education" /><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}></span></a>&nbsp;
        <a className={hoveredElement === 5 ? 'shadowNav' : 'hover'} onMouseEnter={() => { hover(5) }} onMouseLeave={hover} href={"https://tylerw.xyz#contact"}><img src={hoveredElement === 5 ? contactDSG : hoveredElement === 5 && darkMode ? contactLG : !darkMode ? contactDSG : contactLG} alt="contact" /><span className={hoveredElement === 5 ? 'navLiHover' : 'hidden'}></span></a>&nbsp;
      </div>
    </nav>
  )
}

export default Nav