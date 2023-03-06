import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componetes/estaticos/footer/Footer';
import Footer from './componetes/estaticos/navbar/Navbar';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import './App.css';



function App() {
  return (
    <Router>
      <Footer />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Navbar />
    </Router>

  );
}

export default App;