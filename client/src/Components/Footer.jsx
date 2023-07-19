import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
const Footer = (props) => {
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
    <footer className={darkMode ? "footerDark" : null}>
      <span>© 2023 Tyler Wertman Developments</span>&nbsp;&nbsp;
      <button className={darkMode ? "btn btn-success" : "btn btn-dark"} onClick={colorToggle}>{darkMode ? "☀️" : "🌙"}</button>
    </footer>
  )
}

export default Footer