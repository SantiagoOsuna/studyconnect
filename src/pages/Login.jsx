import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthForm from "../components/AuthForm";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No hay usuario registrado");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  const fields = [
    { name: "email", type: "email", placeholder: "Correo electrónico" },
    { name: "password", type: "password", placeholder: "Contraseña" },
    { name: "remember", type: "checkbox", placeholder: "Recuérdame" },
    
  ];

  return (
    <AuthForm
      title="Bienvenido"
      fields={fields}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleLogin}
      buttonText="Ingresar"
      linkText={{ text: "¿No tienes cuenta?", link: "Regístrate aquí" }}
      linkUrl="/register"
    />
  );
}

export default Login;