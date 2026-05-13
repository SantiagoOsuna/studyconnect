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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              📚 Gestión Académica
            </span>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Tus Materias
            </h1>

            <p className="text-gray-500 mt-3 text-lg max-w-2xl">
              Organiza tus asignaturas, administra actividades y mantén un seguimiento académico más eficiente.
            </p>
          </div>

          {/* STATS */}
          <div className="bg-white border border-gray-200 rounded-3xl px-6 py-5 shadow-sm min-w-[220px]">
            <p className="text-sm text-gray-500 mb-1">
              Materias activas
            </p>

            <h3 className="text-4xl font-bold text-blue-600">
              {materias.length}
            </h3>
          </div>

        </div>

        {/* FORM */}
        <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm p-8 mb-14">

          <div className="absolute top-0 right-0 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-40" />

          <div className="relative z-10">
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Agregar nueva materia
              </h3>

              <p className="text-gray-500">
                Crea y organiza tus materias rápidamente.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nombre de la materia
                </label>

                <input
                  type="text"
                  placeholder="Ej: Matemáticas, Física, Inglés..."
                  value={nuevaMateria}
                  onChange={(e) => onNuevaChange?.(e.target.value)}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    bg-gray-50
                    text-gray-800
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition-all
                    duration-200
                  "
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={onAdd}
                  className="
                    h-[58px]
                    px-8
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    hover:from-blue-700
                    hover:to-indigo-700
                    text-white
                    font-semibold
                    shadow-lg
                    shadow-blue-200
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    active:translate-y-0
                  "
                >
                  Agregar materia
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* EMPTY STATE */}
        {materias.length === 0 && (
          <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-16 text-center shadow-sm">
            
            <div className="text-6xl mb-4">
              📖
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Aún no tienes materias
            </h3>

            <p className="text-gray-500 max-w-md mx-auto">
              Agrega tu primera materia para comenzar a organizar actividades, tareas y eventos académicos.
            </p>

          </div>
        )}

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {materias.map((materia, index) => (
            <div
              key={materia.id}
              className="
                group
                relative
                bg-white
                border
                border-gray-200
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                overflow-hidden
              "
            >

              {/* DECORATION */}
              <div
                className={`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1.5
                  ${
                    index % 3 === 0
                      ? "bg-blue-500"
                      : index % 3 === 1
                      ? "bg-indigo-500"
                      : "bg-violet-500"
                  }
                `}
              />

              <div className="flex items-start justify-between mb-6">
                
                <div>
                  <span className="text-sm font-medium text-gray-400">
                    Materia
                  </span>

                  <h3 className="text-2xl font-bold text-gray-800 mt-1">
                    {materia.nombre}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                  📚
                </div>

              </div>

              <div className="flex items-center gap-2 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                <p className="text-sm text-gray-500 font-medium">
                  Materia activa
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => onViewActivities?.(materia.id)}
                  className="
                    flex-1
                    py-3
                    rounded-2xl
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    font-semibold
                    transition-all
                    duration-200
                    hover:shadow-lg
                  "
                >
                  Ver actividades
                </button>

                <button
                  onClick={() => onDelete(materia.id)}
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    border
                    border-red-200
                    text-red-500
                    hover:bg-red-50
                    hover:border-red-300
                    transition-all
                    duration-200
                  "
                >
                  Eliminar
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default MateriasView;