import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/components/Layout.css";
import "../styles/components/Card.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No hay usuario registrado");
    return;
  }

  if (
    email === storedUser.email &&
    password === storedUser.password
  ) {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  } else {
    alert("Correo o contraseña incorrectos");
  }
};

  return (
    <div className="container">
      <div className="card">
        <h2>Bienvenido</h2>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Ingresar</button>

          <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;