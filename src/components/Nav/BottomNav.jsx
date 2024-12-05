import React from 'react';
import { NavLink } from 'react-router-dom';
import "./BottomNav.css"
const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink 
        to="/home" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Home
      </NavLink>
      <NavLink 
        to="/calendario" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Calendário
      </NavLink>
      <NavLink 
        to="/perfil" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Perfil
      </NavLink>
    </nav>
  );
};

export default BottomNav;
