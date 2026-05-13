function ActivitiesView({
  activities,
  newActivity,
  onNewActivityChange,
  onAdd,
  onDelete,
  onEdit,
  onUpdate,
  editingId,
  editText,
  setEditText,
  editDescription,
  setEditDescription,
  editStatus,
  setEditStatus,
  editDueDate,
  setEditDueDate,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

          <div>
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              📝 Gestión Académica
            </span>

            <h1 className="text-4xl font-bold text-gray-900">
              Actividades
            </h1>

            <p className="text-gray-500 mt-3 text-lg max-w-2xl">
              Organiza tareas, entregas y actividades pendientes de forma clara y eficiente.
            </p>
          </div>

          {/* STATS */}
          <div className="bg-white border border-gray-200 rounded-3xl px-6 py-5 shadow-sm min-w-[220px]">
            <p className="text-sm text-gray-500 mb-1">
              Total actividades
            </p>

            <h3 className="text-4xl font-bold text-indigo-600">
              {activities.length}
            </h3>
          </div>

        </div>

        {/* FORM */}
        <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm p-8 mb-14">

          <div className="absolute top-0 right-0 w-56 h-56 bg-indigo-100 rounded-full blur-3xl opacity-40" />

          <div className="relative z-10">

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Crear nueva actividad
              </h3>

              <p className="text-gray-500">
                Completa la información para agregar una nueva tarea académica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* TITLE */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Título
                </label>

                <input
                  type="text"
                  placeholder="Ej: Taller de Física"
                  value={newActivity.title}
                  onChange={(e) =>
                    onNewActivityChange("title", e.target.value)
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    bg-gray-50
                    focus:outline-none
                    focus:ring-4
                    focus:ring-indigo-100
                    focus:border-indigo-500
                    transition-all
                  "
                />
              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Descripción
                </label>

                <textarea
                  placeholder="Describe la actividad..."
                  value={newActivity.description}
                  onChange={(e) =>
                    onNewActivityChange("description", e.target.value)
                  }
                  rows={4}
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    bg-gray-50
                    resize-none
                    focus:outline-none
                    focus:ring-4
                    focus:ring-indigo-100
                    focus:border-indigo-500
                    transition-all
                  "
                />
              </div>

              {/* DATE */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Fecha límite
                </label>

                <input
                  type="date"
                  value={newActivity.due_date}
                  onChange={(e) =>
                    onNewActivityChange("due_date", e.target.value)
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    bg-gray-50
                    focus:outline-none
                    focus:ring-4
                    focus:ring-indigo-100
                    focus:border-indigo-500
                    transition-all
                  "
                />
              </div>

              {/* STATUS */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Estado
                </label>

                <select
                  value={newActivity.status}
                  onChange={(e) =>
                    onNewActivityChange("status", e.target.value)
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    bg-gray-50
                    focus:outline-none
                    focus:ring-4
                    focus:ring-indigo-100
                    focus:border-indigo-500
                    transition-all
                  "
                >
                  <option value="pending">Pendiente</option>
                  <option value="completed">Completada</option>
                </select>
              </div>

            </div>

            <button
              onClick={onAdd}
              className="
                mt-8
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-blue-600
                hover:from-indigo-700
                hover:to-blue-700
                text-white
                font-semibold
                shadow-lg
                shadow-indigo-200
                transition-all
                duration-200
                hover:-translate-y-1
              "
            >
              Agregar actividad
            </button>

          </div>
        </div>

        {/* EMPTY */}
        {activities.length === 0 && (
          <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-16 text-center shadow-sm">

            <div className="text-6xl mb-4">
              🗂️
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              No hay actividades registradas
            </h3>

            <p className="text-gray-500 max-w-md mx-auto">
              Crea tu primera actividad para comenzar a organizar tus tareas y entregas académicas.
            </p>

          </div>
        )}

        {/* CARDS */}
        <div className="grid gap-6">

          {activities.map((act, index) => (
            <div
              key={act.id}
              className="
                relative
                overflow-hidden
                bg-white
                border
                border-gray-200
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* TOP BORDER */}
              <div
                className={`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1.5
                  ${
                    index % 3 === 0
                      ? "bg-indigo-500"
                      : index % 3 === 1
                      ? "bg-blue-500"
                      : "bg-violet-500"
                  }
                `}
              />

              {editingId === act.id ? (

                <div className="flex flex-col gap-4 mt-3">

                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="Título"
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      border
                      border-gray-300
                      bg-gray-50
                      focus:outline-none
                      focus:ring-4
                      focus:ring-indigo-100
                    "
                  />

                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Descripción"
                    rows={4}
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      border
                      border-gray-300
                      bg-gray-50
                      resize-none
                      focus:outline-none
                      focus:ring-4
                      focus:ring-indigo-100
                    "
                  />

                  <input
                    type="date"
                    value={editDueDate}
                    onChange={(e) => setEditDueDate(e.target.value)}
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      border
                      border-gray-300
                      bg-gray-50
                      focus:outline-none
                      focus:ring-4
                      focus:ring-indigo-100
                    "
                  />

                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      border
                      border-gray-300
                      bg-gray-50
                      focus:outline-none
                      focus:ring-4
                      focus:ring-indigo-100
                    "
                  >
                    <option value="pending">Pendiente</option>
                    <option value="completed">Completada</option>
                  </select>

                  <button
                    onClick={() => onUpdate(act.id)}
                    className="
                      mt-2
                      bg-emerald-500
                      hover:bg-emerald-600
                      text-white
                      py-3
                      rounded-2xl
                      font-semibold
                      transition-all
                    "
                  >
                    Guardar cambios
                  </button>

                </div>

              ) : (

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-3">

                      <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
                        📝
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {act.title}
                        </h3>

                        <p className="text-sm text-gray-400">
                          Actividad académica
                        </p>
                      </div>

                    </div>

                    <p className="text-gray-500 leading-relaxed mb-5">
                      {act.description || "Sin descripción"}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">

                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          px-4
                          py-2
                          rounded-full
                          ${
                            act.status === "completed"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }
                        `}
                      >
                        {act.status === "completed"
                          ? "✅ Completada"
                          : "⏳ Pendiente"}
                      </span>

                      <span className="text-sm text-gray-400">
                        📅 {act.due_date || "Sin fecha"}
                      </span>

                    </div>

                  </div>

                  <div className="flex lg:flex-col gap-3">

                    <button
                      onClick={() => onEdit(act)}
                      className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-indigo-50
                        text-indigo-600
                        hover:bg-indigo-100
                        font-semibold
                        transition-all
                      "
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => onDelete(act.id)}
                      className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-red-50
                        text-red-500
                        hover:bg-red-100
                        font-semibold
                        transition-all
                      "
                    >
                      Eliminar
                    </button>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default ActivitiesView;