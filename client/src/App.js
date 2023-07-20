import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Messages from './Components/Messages';
import DarkMode from './Components/DarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    console.log(windowWidth)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Nav darkMode={darkMode} windowWidth={windowWidth} />
        <Routes>
          <Route path="/" element={<Main darkMode={darkMode} windowWidth={windowWidth} />} />
          <Route path="/admin-login" element={<LoginForm darkMode={darkMode} />} />
          <Route path="/admin-register" element={<RegisterForm darkMode={darkMode} />} />
          <Route path="/messages" element={<Messages darkMode={darkMode} />} />
          <Route path="/*" element={<NotFound darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
