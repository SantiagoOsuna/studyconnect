import { Link } from "react-router-dom";
import { Container, Card } from "../components/Layout";

function Landing() {
  return (
    <Container>
      <Card>
        <h1>StudyConnect</h1>
        <p>Organiza tus materias, tareas y colabora con otros estudiantes en un solo lugar.</p>
        <Link to="/login">
          <button>Iniciar Sesión</button>
        </Link>
      </Card>
    </Container>
  );
}

export default Landing;