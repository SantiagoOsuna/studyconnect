import { useState, useEffect } from "react";
import "../styles/pages/Pages.css";

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [materiaId, setMateriaId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    const materiasGuardadas = localStorage.getItem("materias");

    if (tareasGuardadas) setTareas(JSON.parse(tareasGuardadas));
    if (materiasGuardadas) setMaterias(JSON.parse(materiasGuardadas));
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (!titulo || !materiaId || !fecha) return;

    const nueva = {
      id: Date.now(),
      titulo,
      materiaId,
      fecha,
    };

    setTareas([...tareas, nueva]);
    setTitulo("");
    setMateriaId("");
    setFecha("");
  };

  const obtenerNombreMateria = (id) => {
    const materia = materias.find((m) => m.id == id);
    return materia ? materia.nombre : "";
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h2>📝 Tareas</h2>
        <p>Gestiona tus entregas académicas</p>
      </div>

      <div className="form-section">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <select
          value={materiaId}
          onChange={(e) => setMateriaId(e.target.value)}
        >
          <option value="">Seleccionar materia</option>
          {materias.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nombre}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <div className="cards-grid">
        {tareas.map((tarea) => (
          <div key={tarea.id} className="item-card">
            <h4>{tarea.titulo}</h4>
            <p>Materia: {obtenerNombreMateria(tarea.materiaId)}</p>
            <p>Entrega: {tarea.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tareas;