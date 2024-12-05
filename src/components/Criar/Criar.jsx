import React from 'react';
import './Criar.css';
import { Link } from 'react-router-dom';

function Criar() {
  return (
    <div className="container-criar">
      <h1 className="title">CADASTRO</h1>
      <form className="form">
        <input className="input" type="text" placeholder="Nome" />
        <input className="input" type="text" placeholder="Sobrenome" />
        <input className="input" type="date" placeholder="Data de Nascimento" />
        <input className="input" type="text" placeholder="CPF" />
        <input className="input" type="tel" placeholder="Celular" />
        <input className="input" type="email" placeholder="E-mail" />
        <input className="input" type="password" placeholder="Senha" />
       <Link to="/home" className="butto">
       <button type="submit" className="butto">CADASTRAR</button>
       </Link> 
      </form>
    </div>
  );
}

export default Criar;
