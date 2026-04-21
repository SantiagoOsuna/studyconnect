import { useState, useEffect } from "react";
import MateriasView from "../components/MateriasView";
import {
  getSubjects,
  createSubject,
  deleteSubject
} from "../services/subjectService";

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

  // 🔥 GET desde backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubjects();

        const mapped = data.map((m, index) => ({
          id: m.id,
          nombre: m.name,
          colorIndex: index % colors.length
        }));

        setMaterias(mapped);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // ➕ AGREGAR
  const agregarMateria = async () => {
    const nombre = nuevaMateria.trim();
    if (!nombre) return;

    try {
      const color = colors[materias.length % colors.length].accent;

      const nueva = await createSubject(nombre, color);

      setMaterias((prev) => [
        ...prev,
        {
          id: nueva.id,
          nombre: nueva.name,
          colorIndex: prev.length % colors.length
        }
      ]);

      setNuevaMateria("");

    } catch (error) {
      alert(error.message);
    }
  };

  // ❌ ELIMINAR
  const eliminarMateria = async (id) => {
    try {
      await deleteSubject(id);

      setMaterias((prev) => prev.filter((m) => m.id !== id));

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MateriasView
      materias={materias}
      nuevaMateria={nuevaMateria}
      onNuevaChange={setNuevaMateria}
      onAdd={agregarMateria}
      onDelete={eliminarMateria}
    />
  );
}

export default Materias;