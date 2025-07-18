import { createContext, useContext, useState, ReactNode } from "react";

// Creamos el contexto
const UserContext = createContext({
  user: null,
  login: async (email: string, password: string) => {},
  register: async (email: string, password: string) => {},
});

//provider 
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (email:string, password:string) => {
      const res = await fetch("http://localhost:3333/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
      } else {
        setUser(data.mensaje);
      }
  };

  const login = async (email: string, password: string) => {
      const res = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
};

export const useUser = () => {
  return useContext(UserContext);
};
