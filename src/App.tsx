
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componetes/estaticos/footer/Footer';
import Footer from './componetes/estaticos/navbar/Navbar';
import CadastroUsuario from './paginas/cadastro/Cadastro';
import ListaTema from './componetes/postagens/listapostagem/ListaPostagem';
import ListaPostagem from './componetes/temas/listatema/ListaTema';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';



function App() {
  return (
    <Router>
      <Footer />
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastro" element={<CadastroUsuario />} />

        <Route path="/temas" element={<ListaTema />} />


        <Route path="/posts" element={<ListaPostagem />} />
    
      </Routes>
      <Navbar />
    </Router>

  );
}

export default App;