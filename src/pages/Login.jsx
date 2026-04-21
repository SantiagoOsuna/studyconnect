import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";
import AuthForm from "../components/AuthForm";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  console.log("CLICK LOGIN");

   try {
    const res = await login(formData.email, formData.password);
    console.log("RESPUESTA:", res);

    console.log("ANTES DE NAVIGAR");

navigate("/dashboard");

console.log("DESPUÉS DE NAVIGAR");
  } catch (error) {
    console.log("ERROR:", error);
    alert(error.message);
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