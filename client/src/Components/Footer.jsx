import React from 'react'

const Footer = (props) => {
  const { darkMode } = props

  return (
    <footer className={darkMode ? "footerDark" : null}>
      <span>© 2023 Tyler Wertman Developments</span>
    </footer>
  )
}

export default Footer