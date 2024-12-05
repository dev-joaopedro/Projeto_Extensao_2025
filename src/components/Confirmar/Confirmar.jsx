import React from 'react';
import './Confirmar.css';
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className='Conteudo'>
            <div className="container-confirmar-remocao">
                <div className="cabecalho">
                    <img src={logo} alt="Logo UNA" className="logo" />
                </div>
                <div className="conteudo">
                    <div className="cartao-agendamento-remocao">
                        <p>Por favor, confirme que você gostaria de <span className="destaque-remocao">remover</span> o seguinte agendamento:</p>
                        <div className="data-agendamento-remocao">
                            <p className="data">26 de Novembro de 2024</p>
                            <p className="hora">CHEGADA: 09h00</p>
                        </div>
                        <div className="informacoes-paciente-remocao">
                            <p><strong>Nome:</strong> José da Silva</p>
                            <p><strong>Data de Nascimento:</strong> 01/08/1965</p>
                            <p><strong>Celular:</strong> (35)12345-6789</p>
                        </div>
                        <div className="profissional-remocao">
                            <p><strong>Profissional:</strong></p>
                            <p>AMANDA REZENDE COSTA</p>
                        </div>
                    </div>
                    <Link to="/horarios">
                        <button className="botao-remover-remocao">REMOVER</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
