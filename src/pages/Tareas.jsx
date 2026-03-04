import { useState, useEffect } from "react";
import TareasView from "../components/TareasView";

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [materias, setMaterias] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [materiaId, setMateriaId] = useState("");

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
    const t = titulo.trim();
    if (!t) return;

    const nueva = {
      id: Date.now(),
      titulo: t,
      descripcion: descripcion.trim(),
      fecha,
      materiaId,
    };

    setTareas((prev) => [...prev, nueva]);
    setTitulo("");
    setDescripcion("");
    setFecha("");
    setMateriaId("");
  };

  const onChangeField = (field, value) => {
    if (field === "titulo") setTitulo(value);
    if (field === "descripcion") setDescripcion(value);
    if (field === "fecha") setFecha(value);
    if (field === "materiaId") setMateriaId(value);
  };

  const tareasParaMostrar = tareas.map((t) => ({
    ...t,
    materia: materias.find((m) => m.id == t.materiaId)?.nombre || "",
  }));

  return (
    <TareasView
      tareas={tareasParaMostrar}
      titulo={titulo}
      descripcion={descripcion}
      fecha={fecha}
      materiaId={materiaId}
      materias={materias}
      onChangeField={onChangeField}
      onAdd={agregarTarea}
    />
  );
}

export default Tareas;