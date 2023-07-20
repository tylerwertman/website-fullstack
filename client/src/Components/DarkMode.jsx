import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun } from '@fortawesome/free-solid-svg-icons'
// import { faMoon } from '@fortawesome/free-solid-svg-icons'
import sunDSG from './images/sun-regular-DSG.svg'
import moonLG from './images/moon-regular-LG.svg'

const DarkMode = (props) => {
    const { darkMode, setDarkMode } = props
    useEffect(() => {
        if (Cookies.get('darkMode') === undefined) Cookies.set('darkMode', false.toString(), { expires: 7 })

        const darkModeCookie = Cookies.get('darkMode');
        // console.log(darkModeCookie, darkMode)
        setDarkMode(darkModeCookie === "true");

        if (darkModeCookie === "false") document.body.classList.add('change')
        else document.body.classList.remove('change')

        // if (darkModeCookie === "true") document.body.style.background = 'rgb(33, 37, 41)';
        // else document.body.style.background = 'white';
    })

    const colorToggle = () => {
        const updatedDarkMode = !darkMode;
        setDarkMode(updatedDarkMode);
        Cookies.set('darkMode', updatedDarkMode.toString(), { expires: 7 });

        if (!updatedDarkMode) document.body.classList.add('change')
        else document.body.classList.remove('change')

        // if (updatedDarkMode) document.body.style.background = 'rgb(33, 37, 41)';
        // else document.body.style.background = 'white';

    }
    return (
        <button className={darkMode ? "darkmodeL" : "darkmodeD"} onClick={colorToggle}>{darkMode ? <img src={sunDSG} alt="sun" width={"20px"} /> : <img src={moonLG} alt="moon" width={"20px"} />}</button>
    )
}

export default DarkMode