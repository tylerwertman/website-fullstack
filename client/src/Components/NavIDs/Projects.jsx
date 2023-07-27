import React from 'react'
import WTP from '../WTP'

const Projects = (props) => {
    const { darkMode } = props

    return (
        <div className={darkMode ? "section projectsDark" : "section projects"} id="projects">
            <h2>Projects</h2>
            <div className={darkMode ? "contentDark mb-3" : "content mb-3"}>
                <a href="https://crudApps.tylerw.xyz"><h3>CRUD Apps</h3></a>
                <h5 style={{fontWeight:"bolder"}}>What is CRUD? CRUD is Create, Read, Update, Delete.</h5>
                <h5>In the following apps, a user will be able to create, read, update and delete database objects</h5>
                <p>Built with: Mongoose, Express, React, Node, Socket.IO, Multer, Bootstrap & various React libraries</p>
                <p>Features: CRUD. Registration, login & protected routes with JSON web tokens & cookies. Many to many relationships. Real time updates. File upload</p>
            </div>
            <div className={darkMode ? "contentDark mb-3" : "content mb-3"}>
                <a href="https://sneakerverse.net/"><h3>SneakerVerse (Group Project)</h3></a>
                <h5 style={{fontWeight:"bolder"}}>Sneakerverse is a functional sneaker store</h5>
                {/* <h5>In the following apps, a user will be able to create, read, update and delete database objects</h5> */}
                <p>Built with: Mongoose, Express, React, Node, Multer, custom CSS, & PayPal API</p>
                <p>Features: CRUD. Registration, login & protected routes with JSON web tokens & cookies. File upload. Store checkout.</p>
            </div>
            <div className={darkMode ? "contentDark" : "content"}>
                <WTP />
            </div>
        </div>
    )
}

export default Projects