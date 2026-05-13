import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import AuthForm from "../components/AuthForm";

function LoginContainer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const fields = [
    { name: "email", type: "email", placeholder: "Correo electrónico" },
    { name: "password", type: "password", placeholder: "Contraseña" },
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

export default LoginContainer;
