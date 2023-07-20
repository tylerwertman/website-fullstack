import React from 'react'

const About = (props) => {
    const { darkMode } = props
    return (
        <div className={darkMode ? "section aboutDark" : "section about"} id="about">
            <h2>About</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <p>I was born and raised on Long Island, New York and currently reside in South Florida. My admiration for the cornerstone between form and function runs deep. In tandem with my fascination for learning how things work, my passion for web development began. When I'm not coding, you can find me at the beach, watching the New York Mets, tinkering with my 3D printer or reading.</p>
            </div>
        </div>
    )
}

export default About