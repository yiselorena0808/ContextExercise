import React from "react";
import { useNavigate } from "react-router-dom";
import { userUser } from "./UserContext";

const Datos: React.FC = () => {
  const {nombreRol,setNombreRol,descripcion,setDescripcion} = userUser();

  const navigate = useNavigate();

  const irDash = () => {
    navigate("/dash");
  };

  return (
    <div>
      <p>Ingrese los siguientes los datos</p>

      <p>Nombre del Rol: {nombreRol}</p>
      <input
        type="text"onChange={(event) => setNombreRol(event.target.value)}
      ></input>

      <p>Descripción: {descripcion}</p>
      <input
        type="text"onChange={(event) => setDescripcion(event.target.value)}
      ></input>

      <button onClick={irDash}>Ver</button>
    </div>
  );
};

export default Datos;
