import React from 'react'

const Education = (props) => {
    const { darkMode } = props

    return (
        <div className={darkMode ? "section educationDark" : "section education"} id="education">
            <h2>Education</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <h4>CodingDojo Online - 2023</h4>
                <ul>
                    <li>Web Fundamentals</li>
                    <li>Certification of Full Stack Development in MERN</li>
                </ul>
            </div>
        </div>
    )
}

export default Education