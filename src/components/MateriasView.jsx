import "../styles/pages/Pages.css";
import ItemCard from "./ItemCard";

function MateriasView({ materias = [], nuevaMateria = "", onNuevaChange, onAdd, onDelete }) {
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
          onChange={(e) => onNuevaChange && onNuevaChange(e.target.value)}
        />
        <button onClick={() => onAdd && onAdd()}>Agregar</button>
      </div>

      <div className="cards-grid">
        {materias.map((materia, index) => (
          <ItemCard key={materia.id} title={materia.nombre} className={`color-${materia.colorIndex ?? (index % 5)}`}>
            <p>Activa</p>
          
          <button onClick={() => onDelete(materia.id)}>
            Eliminar
          </button>
          </ItemCard>
        ))}
      </div>
    </div>
  );
}

export default MateriasView;
