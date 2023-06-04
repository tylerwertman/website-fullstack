import React from 'react'
import WTP from './WTP'

const Projects = (props) => {
    const { darkMode } = props

    return (
        <div className={darkMode ? "section projectsDark" : "section projects"} id="projects">
            <h2>Projects</h2>
            <div className={darkMode ? "contentDark mb-3" : "content mb-3"}>
                <a href="http://crudApps.tylerw.xyz"><h3>CRUD Apps</h3></a>
                <p>Built with: Mongoose, Express, React, Node, Bootstrap & various React libraries</p>
                <p>Features: CRUD, reg/login, protected routes, dark mode, many to many relationships & more</p>
            </div>
            <div className={darkMode ? "contentDark" : "content"}>
                <WTP />
            </div>
        </div>
    )
}

export default Projects