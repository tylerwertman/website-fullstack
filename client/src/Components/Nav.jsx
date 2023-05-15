import React, {useState} from 'react'
import home from './images/Home-DSG.svg'
import about from './images/About-DSG.svg'
import projects from './images/Projects-DSG.svg'
import education from './images/Education-DSG.svg'
import contact from './images/Contact-DSG.svg'
import homeH from './images/Home-LG.svg'
import aboutH from './images/About-LG.svg'
import projectsH from './images/Projects-LG.svg'
import educationH from './images/Education-LG.svg'
import contactH from './images/Contact-LG.svg'
import {Link} from 'react-router-dom'

const Nav = () => {
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
    <nav>
        <h1><a href="/#home">Tyler Wertman Developments</a></h1>
            <div id="navLinksL">
              {/* <img src="" alt="" /> */}
              <Link className={hoveredElement === 0 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(0)}} onMouseLeave={hover} to={"/#home"}><img src={hoveredElement === 0 ? homeH : home} alt="home"/><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}>&nbsp;Home</span></Link>&nbsp;
              <Link className={hoveredElement === 1 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(1)}} onMouseLeave={hover} to={"/#about"}><img src={hoveredElement === 1 ? aboutH : about} alt="about"/><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}>&nbsp;About</span></Link>&nbsp;
              <Link className={hoveredElement === 2 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(2)}} onMouseLeave={hover} to={"/#projects"}><img src={hoveredElement === 2 ? projectsH : projects} alt="projects"/><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}>&nbsp;Projects</span></Link>&nbsp;
              <Link className={hoveredElement === 3 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(3)}} onMouseLeave={hover} to={"/#education"}><img src={hoveredElement === 3 ? educationH : education} alt="education"/><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}>&nbsp;Education</span></Link>&nbsp;
              <Link className={hoveredElement === 4 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(4)}} onMouseLeave={hover} to={"/#contact"}><img src={hoveredElement === 4 ? contactH : contact} alt="contact"/><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}>&nbsp;Contact</span></Link>&nbsp;
              <Link className="icon hover" onMouseEnter={hover} onMouseOut={hover} to={"#null"}><i className="fa fa-bars"></i></Link>&nbsp;
            </div>
            <div id="navLinksS">
              <Link className="icon hover" onMouseEnter={hover} onMouseOut={hover} to={"#null"} onClick={miniNav}><i className="fa fa-bars"></i></Link>&nbsp;
            </div>
            <div id="navLinksSE" className={isNavOpen ? "navLinksSE" : "navLinksSE hide"} onClick={()=>{setIsNavOpen(false)}}>
              {/* <img src="" alt="" /> */}
              <Link className={hoveredElement === 0 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(0)}} onMouseLeave={hover} to={"/#home"}><img src={hoveredElement === 0 ? homeH : home} alt="home"/><span className={hoveredElement === 0 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 1 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(1)}} onMouseLeave={hover} to={"/#about"}><img src={hoveredElement === 1 ? aboutH : about} alt="about"/><span className={hoveredElement === 1 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 2 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(2)}} onMouseLeave={hover} to={"/#projects"}><img src={hoveredElement === 2 ? projectsH : projects} alt="projects"/><span className={hoveredElement === 2 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 3 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(3)}} onMouseLeave={hover} to={"/#education"}><img src={hoveredElement === 3 ? educationH : education} alt="education"/><span className={hoveredElement === 3 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
              <Link className={hoveredElement === 4 ? 'shadowNav' : 'hover'} onMouseEnter={()=>{hover(4)}} onMouseLeave={hover} to={"/#contact"}><img src={hoveredElement === 4 ? contactH : contact} alt="contact"/><span className={hoveredElement === 4 ? 'navLiHover' : 'hidden'}></span></Link>&nbsp;
            </div>
    </nav>
  )
}

export default Nav