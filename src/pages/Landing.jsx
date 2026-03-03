import { Link } from "react-router-dom";
import "../styles/components/Layout.css";
import "../styles/components/Card.css";

function Landing() {
  return (
    <div className="container">
        <div className="card">
            <h1>StudyConnect</h1>
            <p>
             Organiza tus materias, tareas y colabora con otros estudiantes 
             en un solo lugar.
            </p>

      <Link to="/login">
        <button>Iniciar Sesión</button>
      </Link>
      </div>
    </div>
  );
}

export default Landing;