import React, {useState, useEffect} from 'react'
// import jwtdecode from 'jwt-decode'
import Cookies from 'js-cookie'
const Footer = (props) => {
  const {darkMode, setDarkMode} = props

  useEffect(() => {
    if(Cookies.get('darkMode')===undefined) Cookies.set('darkMode', false.toString(), { expires: 7 })

    const darkModeCookie = Cookies.get('darkMode');
    console.log(darkModeCookie, darkMode)
    setDarkMode(darkModeCookie === "true");
    if (darkModeCookie==="true") document.body.style.background = 'rgb(33, 37, 41)';
    else document.body.style.background = 'white';
}, [])

const colorToggle = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    Cookies.set('darkMode', updatedDarkMode.toString(), { expires: 7 });

    if (updatedDarkMode) document.body.style.background = 'rgb(33, 37, 41)';
    else document.body.style.background = 'white';
    
}

  return (
    <footer>
        © 2023 Tyler Wertman Developments
        <button className={darkMode?"btn btn-primary":"btn btn-dark"} onClick={colorToggle}>{darkMode?"☀️":"🌙"}</button>
    </footer>
  )
}

export default Footer