import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Messages from './Components/Messages';

function App() {
  const [darkMode, setDarkMode] = useState(false)


  return (
    <BrowserRouter>
    <div className="App">
        <Nav darkMode={darkMode}/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin-login" element={<LoginForm/>}/>
            <Route path="/admin-register" element={<RegisterForm/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
