import React from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isWeekend } from "date-fns"
import { Link } from "react-router-dom";

import logo from "../../img/logo.png"
import "./Agendamento.css"

const Agendamento = () => {

  const today = new Date()
  const currentMonthStart = startOfMonth(today)
  const currentMonthEnd = endOfMonth(today)
  const daysInMonth = eachDayOfInterval({ start: currentMonthStart, end: currentMonthEnd })

  // Definir os dias disponíveis
  const availableDays = [1, 5, 7, 10, 12, 15, 17, 19, 21, 24, 26, 28]
  return (
    <div className="Calendario">
      <img
        src={logo}
        alt="Logo"
      />

      <h1 >AGENDAMENTO</h1>
      <p >
        As datas em verde abaixo estão disponíveis
      </p>
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: "#E0E0E0" }} 
      >
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((dayName, index) => (
            <div key={index} className="font-semibold text-gray-700">
              {dayName}
            </div>
          ))}
          {daysInMonth.map((day, index) => {
            const dayOfMonth = format(day, "d");
            const isAvailable = availableDays.includes(parseInt(dayOfMonth));
            const isWeekendDay = isWeekend(day);

            return (
              <div
                key={index}
                className={`flex items-center justify-center p-2 rounded-lg ${isAvailable
                    ? "bg-green-100 text-green-700 font-bold border border-green-300"
                    : isWeekendDay
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                style={{ width: "40px", height: "40px" }} 
              >
                {dayOfMonth}
              </div>
            );
          })}
        </div>
      </div>
            
      <h2>HORÁRIOS</h2>
      <p>
        Os horários em verde abaixo estão disponíveis
      </p>
      <div className="grid grid-cols-4 gap-4">
        {["8h", "9h", "10h", "13h", "14h", "15h", "16h"].map((horario, index) => (
          <Link to="/agendar">
            <button
              key={index}
              className="px-3 py-1 text-sm rounded-md bg-green-200 text-green-700 font-semibold hover:bg-green-300"
            >
              {horario}
            </button>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Agendamento;
