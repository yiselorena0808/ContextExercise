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

