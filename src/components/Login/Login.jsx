import React from 'react';
import "./Login.css"
import Separator from "../Separator/Separator"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (

    <div className="login-container">
      <figure>
        <img src={logo} alt="Logo" className="log" />
      </figure>

      <h2>ENTRAR</h2>

      <div className="input-container">
        <input type="text" placeholder="E-mail ou CPF" className="input-field" />
        <input type="password" placeholder="Senha" className="input-field" />
        <a href="/" className="forgot-password">Esqueci minha senha</a>
      </div>

      <Link to="/home">
        <button className="access-button">ACESSAR CONTA</button>
      </Link>

      <Separator />
      <Link to="/criar"> 
      <button className="create-account-button">CRIAR CONTA</button>
      </Link>
      
    </div>
  );
};

export default Login;

