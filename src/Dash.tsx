import React from "react";
import { userUser } from "./UserContext";

const Dash:React.FC=()=>{
    const {nombreRol,descripcion}= userUser();
    return(
        <div>
             <p>
            Componente Dash
        </p>
        <p>
            Nombre de Rol: {nombreRol}
        </p>
         <p>
            Descripcion de Rol: {descripcion}
        </p>
        </div>
    )
}
export default Dash;