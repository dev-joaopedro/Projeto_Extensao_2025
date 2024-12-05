import React from 'react';
import './FormScreen.css';

const FormScreen = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Formulário enviado!");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="section">
          <h2 className="section-title">DADOS PESSOAIS</h2>
          <input
            type="text"
            placeholder="Nome Completo"
            className="input"
          />
          <input
            type="text"
            placeholder="Data de Nascimento"
            className="input"
          />
          <input
            type="text"
            placeholder="CPF"
            className="input"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="input"
          />
        </div>

        <div className="section">
          <h2 className="section-title">DADOS DE LOGIN</h2>
          <input
            type="email"
            placeholder="E-mail"
            className="input"
          />
          <input
            type="password"
            placeholder="Senha"
            className="input"
          />
        </div>
      </form>
    </div>
  );
};

export default FormScreen;
