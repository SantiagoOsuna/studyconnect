import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MateriasView from "../components/MateriasView";
import {
  getSubjects,
  createSubject,
  deleteSubject,
} from "../services/subjectService";

function MateriasContainer() {
  const navigate = useNavigate();
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
    const fetchData = async () => {
      try {
        const data = await getSubjects();

        const mapped = data.map((m, index) => ({
          id: m.id,
          nombre: m.name,
          colorIndex: index % colors.length,
        }));

        setMaterias(mapped);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const agregarMateria = async () => {
    const nombre = nuevaMateria.trim();
    if (!nombre) return;

    try {
      const nueva = await createSubject(nombre, colors[materias.length % colors.length].accent);

      setMaterias((prev) => [
        ...prev,
        {
          id: nueva.id,
          nombre: nueva.name,
          colorIndex: prev.length % colors.length,
        },
      ]);

      setNuevaMateria("");
    } catch (error) {
      alert(error.message);
    }
  };

  const eliminarMateria = async (id) => {
    try {
      await deleteSubject(id);
      setMaterias((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleViewActivities = (id) => {
    navigate(`/activities/${id}`);
  };

  return (
    <MateriasView
      materias={materias}
      nuevaMateria={nuevaMateria}
      onNuevaChange={setNuevaMateria}
      onAdd={agregarMateria}
      onDelete={eliminarMateria}
      onViewActivities={handleViewActivities}
    />
  );
}

export default MateriasContainer;
