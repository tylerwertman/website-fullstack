import React from 'react'

const About = (props) => {
    const { darkMode } = props
    return (
        <div className="section" id={darkMode ? "aboutDark" : "about"}>
            <h2>About</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <p>I was born and raised on Long Island, New York and currently reside in South Florida. My admiration for the cornerstone between form and function runs deep. In tandem with my fascination for learning how things work, my passion for both software development and 3D printing began. In my downtime, I enjoy hiking mountains, sports, reading, and creative writing.</p>
            </div>
        </div>
    )
}

export default About