import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'

const Main = (props) => {
    const { darkMode } = props
    return (
        <main>
            <Home darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <Contact darkMode={darkMode} />
        </main>
    )
}

export default Main