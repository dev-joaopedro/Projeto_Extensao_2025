import React from 'react';
import logo from "../../img/logo.png";
import { NavLink } from 'react-router-dom';

import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="log" />

      <NavLink 
      to="/calendario" 
      >
        <button className="button">
          <h2 className="button-title">AGENDAR</h2>
          <p className="button-description">
            Acessar calendário para agendar sua consulta com os profissionais disponíveis.
          </p>
        </button>
      </NavLink>

      <NavLink
      to="/horarios" 
      >
        <button className="button">
          <h2 className="button-title">MEUS AGENDAMENTOS</h2>
          <p className="button-description">
            Acesse aqui seus horários caso queira alterar ou remover agendamento.
          </p>
        </button>
      </NavLink>

    </div>
  );
};

export default HomeScreen;
