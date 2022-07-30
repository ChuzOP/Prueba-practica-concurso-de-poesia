import React from "react";
import "./concursantes.css";
import { Link } from "react-router-dom";
const Concursantes = ({concursantes}) => {
  return (
    <div className="content">
      <div className="form">
        <Link to="/">⏪ Volver al formulario</Link>
      </div>
      <div className="concursantes-content">
        {
          concursantes.map((concursante) => {
            return(
              <li className="lista-concursantes" key={concursante.id}>
                <ul>{concursante.name}</ul>
                <ul>{concursante.career}</ul>
                <ul>{concursante.dateOfBirth}</ul>
                <ul>{concursante.poetryGender}</ul>
                <ul>Fecha de declamación</ul>  
              </li>
            )
          } )
        }
      </div>
    </div>
  );
};

export default Concursantes;
