import React from 'react';
import Students from './Components/Student';
import './Components/MyNavbar.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import './App.css';
import './Components/Style.css';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
