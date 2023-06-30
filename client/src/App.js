import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Messages from './Components/Messages';
import WithAuth from './Components/WithAuth';

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
        <WithAuth darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
