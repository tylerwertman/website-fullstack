import React from 'react'

const Footer = (props) => {
  const { darkMode } = props

  return (
    <footer className={darkMode ? "footerDark" : null}>
      <span>© {new Date().getFullYear()} Tyler Wertman Developments</span>
    </footer>
  )
}

export default Footer