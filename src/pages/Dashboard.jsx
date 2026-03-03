import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/Dashboard.css";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">

      <div className="sidebar">
        <h2>StudyConnect</h2>

        <Link to="/materias">📚 Materias</Link>
        <Link to="/tareas">📝 Tareas</Link>
        <Link to="#">👥 Grupos</Link>
        <Link to="#">💬 Foro</Link>
        <Link to="#">📁 Apuntes</Link>

        <button 
          onClick={handleLogout} 
          style={{ marginTop: "auto", backgroundColor: "#dc2626" }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="navbar">
          <h3>Panel Principal</h3>
          <p>Hola, Estudiante</p>
        </div>

        <div className="content">
          <div className="dashboard-card">
            <h4>Materias Activas</h4>
            <p>4 materias registradas</p>
          </div>

          <div className="dashboard-card">
            <h4>Tareas Pendientes</h4>
            <p>2 tareas por entregar</p>
          </div>

          <div className="dashboard-card">
            <h4>Grupos de Estudio</h4>
            <p>3 grupos activos</p>
          </div>

          <div className="dashboard-card">
            <h4>Publicaciones Foro</h4>
            <p>5 preguntas recientes</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;