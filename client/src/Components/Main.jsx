import React from 'react'
import Intro from './NavIDs/Intro'
import About from './NavIDs/About'
import Blog from './NavIDs/Blog'
import Projects from './NavIDs/Projects'
import Education from './NavIDs/Education'
import Contact from './NavIDs/Contact'

const Main = (props) => {
    const { darkMode, windowWidth } = props
    return (
        <main>
            <Intro darkMode={darkMode} />
            <Blog darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Contact darkMode={darkMode} windowWidth={windowWidth} />
        </main>
    )
}

export default Main