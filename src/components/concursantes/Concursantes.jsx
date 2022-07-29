import React from "react";
import "./concursantes.css";
import Participantes from "./Participantes";
import { Link } from "react-router-dom";
const Concursantes = () => {
  return (
    <div className="content">
      <div className="form">
        <Link to="/">⏪ Volver al formulario</Link>
      </div>
      <div className="concursantes-content">
        <Participantes />
      </div>
    </div>
  );
};

export default Concursantes;
