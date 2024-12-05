import React from 'react';
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

import './Marca.css';

function Marca() {
    return (
        <div className="pagina">
            <div className="bloco-conteudo">
                <div className="topo">
                    <img src={logo} alt="Logo UNA" className="imagem-logo" />
                </div>
                <div className="corpo">
                    <p>Por favor, confirme se deseja solicitar o seguinte agendamento:</p>
                    <div className="cartao-agendamento-marca">
                        <div className="data-agendamento">
                            <p className="data">26 de Novembro de 2024</p>
                            <p className="hora">CHEGADA: 09h00</p>
                        </div>
                        <div className="informacoes-paciente">
                            <p><strong>Nome:</strong> José da Silva</p>
                            <p><strong>Data de Nascimento:</strong> 01/08/1965</p>
                            <p><strong>Celular:</strong> (35)12345-6789</p>
                        </div>
                        <div className="informacoes-profissional">
                            <p><strong>Profissional:</strong></p>
                            <p>AMANDA REZENDE COSTA</p>
                        </div>
                    </div>
                    <Link to="/home">
                        <button className="botao-agendar-marca">AGENDAR</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Marca;
    