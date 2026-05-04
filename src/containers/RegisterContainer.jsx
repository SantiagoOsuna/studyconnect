import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import AuthForm from "../components/AuthForm";

function RegisterContainer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      await register(formData.nombre, formData.email, formData.password);
      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const fields = [
    { name: "nombre", type: "text", placeholder: "Nombre completo" },
    { name: "email", type: "email", placeholder: "Correo electrónico" },
    { name: "password", type: "password", placeholder: "Contraseña" },
  ];

  return (
    <AuthForm
      title="Crear Cuenta"
      fields={fields}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleRegister}
      buttonText="Registrarme"
      linkText={{ text: "¿Ya tienes cuenta?", link: "Inicia sesión" }}
      linkUrl="/login"
    />
  );
}

export default RegisterContainer;
