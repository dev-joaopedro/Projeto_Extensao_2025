import React, { useState } from 'react';
import './Horarios.css';
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

function Horarios() {
    const [appointments, setAppointments] = useState([
        { id: 1, name: 'José da Silva', date: '26 de Novembro de 2024', time: '09h00' },
        { id: 2, name: 'José da Silva', date: '26 de Novembro de 2024', time: '09h00' },
        { id: 3, name: 'José da Silva', date: '26 de Novembro de 2024', time: '09h00' },
        { id: 4, name: 'José da Silva', date: '26 de Novembro de 2024', time: '09h00' },
        { id: 5, name: 'José da Silva', date: '26 de Novembro de 2024', time: '09h00' },
    ]);

    const handleRemove = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    return (
        <div className="container-horarios">

            <img src={logo} alt="Logo UNA" className="logo" />
            <div className="cabecalho-data">
                <h1>26 Novembro, <span className="destaque">2024</span></h1>
            </div>
            <div className="agendamentos">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="cartao-agendamento">
                        <div className="informacoes-agendamento">
                            <p><strong>Nome:</strong> {appointment.name}</p>
                            <p>{appointment.date} | {appointment.time}</p>
                        </div>

                        <Link to="/cancelar">
                            <button className="botao-remover" onClick={() => handleRemove(appointment.id)}>REMOVER</button>
                        </Link>
                    </div>
                ))}
                <Link to="/calendario">
                    <button className="botao-remover">AGENDAR</button>
                </Link>
            </div>

        </div>
    );
}

export default Horarios;
