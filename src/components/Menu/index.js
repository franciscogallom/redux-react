import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav id="menu">
      <div>
        <Link to="/">Usuarios</Link>
      </div>
      <div>
        <Link to="/tasks">Tareas</Link>
      </div>
    </nav>
  );
};

export default Menu;
