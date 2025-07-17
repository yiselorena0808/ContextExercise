import {createContext,useContext,useState,ReactNode}from 'react';

//crear contxt

const UserContext = createContext({
  user:null,
  login:async ()=>{},
  register:async()=>{}
});

//provider del context

export const UserProvider=({children}:{children:ReactNode})=>{
    const [user,setUser]= useState('')
    const register=async ({email, password})=>{
       const res= await fetch('http://localhost:3333/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
        const data = await res.json();
        if(res){
            setUser(data.user)
        }else{
            setUser(data.mensaje)
        }
    }

    const login = async ({ email, password }) => {
            const res = await fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            setUser(data.respuesta);
        } else {
            setUser(data.msj);
        }
        };

        return (
        <UserContext.Provider value={{ user, login, register }}>
            {children}
        </UserContext.Provider>
        );
}
export const userUser = () => {
  return useContext(UserContext);
};
