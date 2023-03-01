import React from 'react';
import Navbar from './componetes/estaticos/navbar/Navbar';
import Footer from './componetes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
