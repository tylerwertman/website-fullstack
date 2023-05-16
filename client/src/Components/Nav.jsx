import React, {useState} from 'react'
import homeDSG from './images/Home-DSG.svg'
import aboutDSG from './images/About-DSG.svg'
import projectsDSG from './images/Projects-DSG.svg'
import educationDSG from './images/Education-DSG.svg'
import contactDSG from './images/Contact-DSG.svg'
import homeLG from './images/Home-LG.svg'
import aboutLG from './images/About-LG.svg'
import projectsLG from './images/Projects-LG.svg'
import educationLG from './images/Education-LG.svg'
import contactLG from './images/Contact-LG.svg'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  const {darkMode} = props
  const [hoveredElement, setHoveredElement] = useState(null)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const hover = (index) => {
    // e.stopPropagation();
    // console.log("hover running")
      setHoveredElement(index)
      // console.log(index)
  }

  const miniNav = () => {
    setIsNavOpen(!isNavOpen)
    console.log("miniNav")
  }
  return (
    <nav className={darkMode?"navDark":null}>
        <h1><a href="/#home">Tyler Wertman Developments</a></h1>
            <div id={darkMode ? "navLinksL" : "navLinksL"}>
              {/* <img src="" alt="" /> */}
              <Link className={hoveredElement === 0 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(0)}} onMouseLeave={hover} to={"/#home"}><img src={hoveredElement === 0 ? homeLG : hoveredElement === 0 && darkMode ? homeLG : !darkMode ? homeDSG : homeLG} alt="home"/><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}>&nbsp;Home</span></Link>&nbsp;
              <Link className={hoveredElement === 1 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(1)}} onMouseLeave={hover} to={"/#about"}><img src={hoveredElement === 1 ? aboutLG : !darkMode ? aboutDSG : aboutLG} alt="about"/><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}>&nbsp;About</span></Link>&nbsp;
              <Link className={hoveredElement === 2 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(2)}} onMouseLeave={hover} to={"/#projects"}><img src={hoveredElement === 2 ? projectsLG : !darkMode ? projectsDSG: projectsLG} alt="projects"/><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}>&nbsp;Projects</span></Link>&nbsp;
              <Link className={hoveredElement === 3 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(3)}} onMouseLeave={hover} to={"/#education"}><img src={hoveredElement === 3 ? educationLG : !darkMode ? educationDSG : educationLG} alt="education"/><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}>&nbsp;Education</span></Link>&nbsp;
              <Link className={hoveredElement === 4 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(4)}} onMouseLeave={hover} to={"/#contact"}><img src={hoveredElement === 4 ? contactLG : !darkMode ? contactDSG : contactLG} alt="contact"/><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}>&nbsp;Contact</span></Link>&nbsp;
              <Link className="icon hover" onMouseEnter={hover} onMouseOut={hover} to={"#null"}><i className="fa fa-bars"></i></Link>&nbsp;
            </div>
            <div id="navLinksS">
              <Link className="icon hover" onMouseEnter={hover} onMouseOut={hover} to={"#null"} onClick={miniNav}><i className="fa fa-bars" style={darkMode?{color:"lightgrey"}:null}></i></Link>&nbsp;
            </div>
            <div id="navLinksSE" className={isNavOpen && darkMode ? "navLinksSEDark" : isNavOpen ? "navLinksSE" : "navLinksSE hide"} onClick={()=>{setIsNavOpen(false)}}>
              {/* <img src="" alt="" /> */}
              <Link className={hoveredElement === 0 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(0)}} onMouseLeave={hover} to={"/#home"}><img src={hoveredElement === 0 ? homeLG : hoveredElement === 0 && darkMode ? homeLG : !darkMode ? homeDSG : homeLG} alt="home"/><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 1 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(1)}} onMouseLeave={hover} to={"/#about"}><img src={hoveredElement === 1 ? aboutDSG : hoveredElement === 1 && darkMode ? aboutLG : !darkMode ? aboutDSG : aboutLG} alt="about"/><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 2 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(2)}} onMouseLeave={hover} to={"/#projects"}><img src={hoveredElement === 2 ? projectsDSG : hoveredElement === 2 && darkMode ? projectsLG : !darkMode ? projectsDSG : projectsLG} alt="projects"/><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 3 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(3)}} onMouseLeave={hover} to={"/#education"}><img src={hoveredElement === 3 ? educationDSG : hoveredElement === 3 && darkMode ? educationLG : !darkMode ? educationDSG : educationLG} alt="education"/><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 4 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(4)}} onMouseLeave={hover} to={"/#contact"}><img src={hoveredElement === 4 ? contactDSG : hoveredElement === 4 && darkMode ? contactLG : !darkMode ? contactDSG : contactLG} alt="contact"/><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
            </div>
    </nav>
  )
}

export default Nav