import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>} />
        {/* <Route path="/#main" element={<Main/>} /> */}
        {/* <Route path="/#footer" element={<Footer/>} /> */}
      </Routes>
      <Main/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
