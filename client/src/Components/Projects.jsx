import React from 'react'
import WTP from './WTP'

const Projects = (props) => {
    const { darkMode } = props

    return (
        <div className={darkMode ? "section projectsDark" : "section projects"} id="projects">
            <h2>Projects</h2>
            <div className={darkMode ? "contentDark mb-3" : "content mb-3"}>
                <a href="http://crudApps.tylerw.xyz"><h3>CRUD Apps</h3></a>
                <h4>What is CRUD? CRUD is an acronym for Create, Read, Update, Delete.</h4>
                <h6>In the following apps, a user will be able to create, read, update and delete database objects</h6>
                <p>Built with: Mongoose, Express, React, Node, Socket.IO, Multer, Bootstrap & various React libraries</p>
                <p>Features: CRUD, registration & login with JSON web tokens & cookies, protected routes, many to many relationships, real time updates, & file upload</p>
            </div>
            <div className={darkMode ? "contentDark" : "content"}>
                <WTP />
            </div>
        </div>
    )
}

export default Projects