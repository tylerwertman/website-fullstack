import React from 'react'
import WTP from './WTP'

const Projects = () => {
    return (
        <div className="section" id="projects">
            <h2>Projects</h2>
            <div className="content">
                <a href="http://bookclub.tylerw.xyz"><h3>Book Club</h3></a>
            </div>
            <br/>
            <div className="content">
                <WTP/>
            </div>
        </div>
    )
}

export default Projects