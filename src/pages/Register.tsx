import { useState } from "react";
import { userUser } from "../UserContext";

const Register:React.FC=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {register}=userUser()
    const guardar= async ()=>{
        await register(email,password)
    }
return(
<div>
    <form>
        <input type="email" onChange={(event)=>setEmail(event.target.value)}></input>
         <input type="password" onChange={(event)=>setPassword(event.target.value)}></input>
         <button type="submit"></button>
    </form>
</div>
)
}
export default Register;