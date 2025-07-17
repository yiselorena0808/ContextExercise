import { createContext, useContext, ReactNode, useState } from "react";

const UserContext = createContext({
  nombreRol: '',setNombreRol: (nombreRol: string) => {},
  descripcion: '',setDescripcion: (descripcion: string) => {},});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [nombreRol, setNombreRol] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <UserContext.Provider value={{ nombreRol, setNombreRol, descripcion, setDescripcion }}>
      {children}
    </UserContext.Provider>
  );
};

export const userUser = () => {
  return useContext(UserContext);
};
