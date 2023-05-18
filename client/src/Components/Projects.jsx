import React from 'react'
import WTP from './WTP'

const Projects = (props) => {
    const { darkMode } = props

    return (
        <div className="section" id={darkMode ? "projectsDark" : "projects"}>
            <h2>Projects</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <a href="http://bookclub.tylerw.xyz"><h3>Book Club</h3></a>
                <p>Built with: Mongoose, Express, React, Node, Bootstrap</p>
                <p>Features: CRUD, reg/login, private routes, dark mode</p>
            </div>
            <br />
            <div className={darkMode ? "contentDark" : "content"}>
                <WTP />
            </div>
        </div>
    )
}

export default Projects