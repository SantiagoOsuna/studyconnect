import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const user = { nombre, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Usuario registrado correctamente");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Crear Cuenta</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Registrarme</button>

          <p>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;