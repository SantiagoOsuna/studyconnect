import { useState, useEffect } from "react";
import MateriasView from "../components/MateriasView";

function Materias() {
  const [materias, setMaterias] = useState([]);
  const [nuevaMateria, setNuevaMateria] = useState("");

  const colors = [
    { bg: "#eff6ff", accent: "#3b82f6" },
    { bg: "#ecfdf5", accent: "#10b981" },
    { bg: "#fef3c7", accent: "#f59e0b" },
    { bg: "#fce7f3", accent: "#ec4899" },
    { bg: "#ede9fe", accent: "#8b5cf6" },
  ];

  useEffect(() => {
    const data = localStorage.getItem("materias");
    if (data) {
      const parsed = JSON.parse(data);
      const migrated = parsed.map((m) => {
        if (typeof m.colorIndex === "number") return m;
        const idx = colors.findIndex((c) => c.accent === m.accent || c.bg === m.bg);
        return { ...m, colorIndex: idx >= 0 ? idx : 0 };
      });
      setMaterias(migrated);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("materias", JSON.stringify(materias));
  }, [materias]);

  const agregarMateria = () => {
    const nombre = nuevaMateria.trim();
    if (!nombre) return;

    const nueva = {
      id: Date.now(),
      nombre,
      colorIndex: materias.length % colors.length,
    };

    setMaterias((prev) => [...prev, nueva]);
    setNuevaMateria("");
  };

  return (
    <MateriasView
      materias={materias}
      nuevaMateria={nuevaMateria}
      onNuevaChange={setNuevaMateria}
      onAdd={agregarMateria}
    />
  );
}

export default Materias;