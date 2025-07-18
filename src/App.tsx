//REALICE OTRO EJERCICIO DENTRO DEL MISMO ARCHIVO CONTEXT TOMANDO DE BASE EL EJERCICIO ANTERIOR,ACTUALMENTE SE ESTA PROBANDO
//ES EL DE LOGIN Y REGISTER

import React from "react";
import Register from "./pages/Register";
import { UserProvider } from "./UserContext2";

const App:React.FC=()=>{
return(
  <UserProvider>
    <Register></Register>
  </UserProvider>

)
}
export default App;


//COMENTARIO PARA APP QUE SE REALIZO PARA TRABAJO DE CONTEXT DE NOMBRE DE ROL Y DESCRIPCION 

/*import React from "react";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Datos from "./Datos";
import Dash from "./Dash";

const App:React.FC=()=>{
return(
  <div>
    <UserProvider>
   <Router>
      <Routes>
        <Route path='/' element={<Datos></Datos>}></Route>
        <Route path='/dash' element={<Dash></Dash>}></Route>
      </Routes>
    </Router>
    </UserProvider>
  </div>
)
  
}
export default App;*/

