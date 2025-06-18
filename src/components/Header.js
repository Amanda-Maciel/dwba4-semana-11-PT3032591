import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <a href="#home">HOME</a>
        <a href="#eventos">EVENTOS</a>
        <a href="#contato">CONTATO</a>
        <div className="dropdown">
          <button className="dropbtn">
            CURSOS
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#tads">Análise e Desenvolvimento de Sistemas</a>
            <a href="#eng">Engenharia de Produção</a>
          </div>
        </div>
        <a href="#entrar">ENTRAR</a>
        <a href="#sobre" id="sobre">SOBRE</a>
      </div>
      <div id="div_logo">
        <img src="https://raw.githubusercontent.com/DWBA4/dwba4_semana_imagens/refs/heads/master/Logo.jpg" alt="Logo IFSP" />
      </div>
    </header>
  );
};

export default Header;