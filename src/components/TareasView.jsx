import "../styles/pages/Pages.css";
import ItemCard from "./ItemCard";

function TareasView({
  tareas = [],
  titulo = "",
  descripcion = "",
  fecha = "",
  materiaId = "",
  materias = [],
  onChangeField,
  onAdd,
}) {
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
          onChange={(e) => onChangeField && onChangeField("titulo", e.target.value)}
        />

        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => onChangeField && onChangeField("descripcion", e.target.value)}
        />

        <input type="date" value={fecha} onChange={(e) => onChangeField && onChangeField("fecha", e.target.value)} />

        <select value={materiaId} onChange={(e) => onChangeField && onChangeField("materiaId", e.target.value)}>
          <option value="">Sin materia</option>
          {materias.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nombre}
            </option>
          ))}
        </select>

        <button onClick={() => onAdd && onAdd()}>Agregar</button>
      </div>

      <div className="cards-grid">
        {tareas.map((tarea) => (
          <ItemCard key={tarea.id} title={tarea.titulo}>
            {tarea.descripcion ? <p>{tarea.descripcion}</p> : null}
            {tarea.materia ? <p>Materia: {tarea.materia}</p> : null}
            {tarea.fecha ? <p>Entrega: {tarea.fecha}</p> : null}
          </ItemCard>
        ))}
      </div>
    </div>
  );
}

export default TareasView;
