import { useState } from "react";
import { useUser} from "../UserContext2";

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useUser();

  const guardar = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await register(email, password);
      alert("Registrado exitoso");
    } catch (error) {
      console.error("Registro fallido:", error);
      alert("Error de registro");
    }
  };

  return (
    <div>
      <form onSubmit={guardar}>
        <input
          type="email"onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password" onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
