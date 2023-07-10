import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Messages from './components/Messages';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Nav darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Main darkMode={darkMode} />} />
          <Route path="/admin-login" element={<LoginForm darkMode={darkMode} />} />
          <Route path="/admin-register" element={<RegisterForm darkMode={darkMode} />} />
          <Route path="/messages" element={<Messages darkMode={darkMode} />} />
          <Route path="/*" element={<NotFound darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
