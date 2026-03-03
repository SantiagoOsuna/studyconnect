import { useState, useEffect } from "react";
import "../styles/pages/Pages.css";

function Materias() {
  const [materias, setMaterias] = useState([]);
  const [nuevaMateria, setNuevaMateria] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("materias");
    if (data) setMaterias(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("materias", JSON.stringify(materias));
  }, [materias]);

  const agregarMateria = () => {
    if (nuevaMateria.trim() === "") return;

    const nueva = {
      id: Date.now(),
      nombre: nuevaMateria,
    };

    setMaterias([...materias, nueva]);
    setNuevaMateria("");
  };

  const colors = [
  { bg: "#eff6ff", accent: "#3b82f6" },
  { bg: "#ecfdf5", accent: "#10b981" },
  { bg: "#fef3c7", accent: "#f59e0b" },
  { bg: "#fce7f3", accent: "#ec4899" },
  { bg: "#ede9fe", accent: "#8b5cf6" },
];

const getColor = (index) => colors[index % colors.length];



  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h2>📚 Materias</h2>
        <p>Organiza tus materias activas</p>
      </div>

      <div className="form-section">
        <input
          type="text"
          placeholder="Nombre de la materia"
          value={nuevaMateria}
          onChange={(e) => setNuevaMateria(e.target.value)}
        />
        <button onClick={agregarMateria}>Agregar</button>
      </div>

      <div className="cards-grid">
        {materias.map((materia, index) => {
        const color = getColor(index);

    return (
      <div
        key={materia.id}
        className="item-card"
        style={{
          backgroundColor: color.bg,
          borderColor: color.accent,
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div
          className="card-accent"
          style={{ backgroundColor: color.accent }}
        ></div>

        <div className="card-header">
          <h4>{materia.nombre}</h4>
          <span className="badge">Activa</span>
        </div>

        <p>Materia activa</p>
      </div>
        );
        })}
        </div>
    </div>
  );
}

export default Materias;