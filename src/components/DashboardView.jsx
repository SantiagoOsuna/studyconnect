import { Link } from "react-router-dom";
import "../styles/pages/Dashboard.css";
import "../styles/components/Modal.css";

function DashboardView({ onLogout, onEditUser, onDeleteUser }) {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2>StudyConnect</h2>

        <Link to="/materias">📚 Materias</Link>
        <Link to="/tareas">📝 Tareas</Link>
        <Link to="#">👥 Grupos</Link>
        <Link to="#">💬 Foro</Link>
        <Link to="#">📁 Apuntes</Link>

        {onLogout && (
          <button onClick={onLogout}>Cerrar Sesión</button>
        )}
      </div>

      <div className="main-content">
        <div className="navbar">
          <h3>Panel Principal</h3>
          <button className="btn-edit" onClick={onEditUser}>
            Editar Perfil
          </button>

          <button className="btn-delete" onClick={onDeleteUser}>
            Eliminar Cuenta
          </button>
          <p>Hola, Estudiante</p>
        </div>

        <div className="content">
          <div className="dashboard-card">
            <h4>Materias Activas</h4>
            <p>—</p>
          </div>

          <div className="dashboard-card">
            <h4>Tareas Pendientes</h4>
            <p>—</p>
          </div>

          <div className="dashboard-card">
            <h4>Grupos de Estudio</h4>
            <p>—</p>
          </div>

          <div className="dashboard-card">
            <h4>Publicaciones Foro</h4>
            <p>—</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
