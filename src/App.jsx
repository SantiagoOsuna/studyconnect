import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Materias from "./pages/Materias";
import Tareas from "./pages/Tareas";
import Register from "./pages/Registro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/materias" element={<Materias />} />
      <Route path="/tareas" element={<Tareas />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;