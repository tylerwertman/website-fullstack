import React from 'react'
import missing from './images/404.png'
import missingDark from './images/404Dark.png'

const NotFound = (props) => {
    const {darkMode} = props
    return (
        <div style={{ marginTop: "60px" }}>
            <img alt="404 Not Found" src={darkMode ? missingDark : missing} />
        </div>
    )
}

export default NotFound