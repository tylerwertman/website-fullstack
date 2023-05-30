import React from 'react'
import WTP from './WTP'

const Projects = (props) => {
    const { darkMode } = props

    return (
        <div className="section" id={darkMode ? "projectsDark" : "projects"}>
            <h2>Projects</h2>
            <div className={darkMode ? "contentDark mb-3" : "content mb-3"}>
                <a href="http://bookclub.tylerw.xyz"><h3>Book Club</h3></a>
                <p>Built with: Mongoose, Express, React, Node, Bootstrap</p>
                <p>Features: CRUD, reg/login, protected routes, dark mode, table sorting, many to many relationships</p>
            </div>

            <div className={darkMode ? "contentDark mb-3" : "content mb-3"}>
                <a href="http://brightideas.tylerw.xyz"><h3>Bright Ideas</h3></a>
                <p>Built with: Mongoose, Express, React, Node, Bootstrap</p>
                <p>Features: CRUD, reg/login, protected routes, dark mode, many to many relationships</p>
            </div>
            <div className={darkMode ? "contentDark" : "content"}>
                <WTP />
            </div>
        </div>
    )
}

export default Projects