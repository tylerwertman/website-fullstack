import React from 'react'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'

const Main = (props) => {
    const { darkMode, windowWidth } = props
    return (
        <main>
            <Home darkMode={darkMode} />
            <Blog darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Contact darkMode={darkMode} windowWidth={windowWidth} />
        </main>
    )
}

export default Main