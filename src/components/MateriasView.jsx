import ItemCard from "./ItemCard";

function MateriasView({
  materias = [],
  nuevaMateria = "",
  onNuevaChange,
  onAdd,
  onDelete,
  onViewActivities,
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          📚 Materias
        </h2>
        <p className="text-gray-500">
          Organiza tus materias activas
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
        
        <input
          type="text"
          placeholder="Nombre de la materia"
          value={nuevaMateria}
          onChange={(e) => onNuevaChange?.(e.target.value)}
          className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:-translate-y-0.5"
        >
          Agregar
        </button>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {materias.map((materia) => (
          <ItemCard key={materia.id} title={materia.nombre}>
            
            <p className="text-sm text-gray-500 mb-4">
              Activa
            </p>

            <div className="flex gap-2">
              
              <button
                onClick={() => onViewActivities?.(materia.id)}
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium transition"
              >
                Ver actividades
              </button>

              <button
                onClick={() => onDelete(materia.id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
              >
                Eliminar
              </button>

            </div>

          </ItemCard>
        ))}

      </div>
    </div>
  );
}

export default MateriasView;