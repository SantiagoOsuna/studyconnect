function EventsView({
  events,
  newEvent,
  onNewEventChange,
  onAdd,
  onEdit,
  onUpdate,
  onDelete,
  editingId,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  editStatus,
  setEditStatus,
  editDueDate,
  setEditDueDate,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            StudyConnect
          </span>

          <h2 className="text-4xl font-bold text-gray-900">
            📅 Gestión de Eventos
          </h2>

          <p className="text-gray-500 text-lg">
            Organiza reuniones, recordatorios y eventos importantes
          </p>
        </div>
      </div>

      {/* FORMULARIO */}
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur border border-gray-200 shadow-xl rounded-3xl p-8 mb-10">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
            ➕
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-xl">
              Crear nuevo evento
            </h3>

            <p className="text-sm text-gray-500">
              Completa la información del evento
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Título del evento
            </label>

            <input
              type="text"
              placeholder="Ej: Reunión grupal de matemáticas"
              value={newEvent.title}
              onChange={(e) =>
                onNewEventChange("title", e.target.value)
              }
              className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Descripción
            </label>

            <textarea
              placeholder="Describe el evento..."
              value={newEvent.description}
              onChange={(e) =>
                onNewEventChange("description", e.target.value)
              }
              rows={4}
              className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 bg-gray-50 resize-none focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Fecha
            </label>

            <input
              type="date"
              value={newEvent.due_date}
              onChange={(e) =>
                onNewEventChange("due_date", e.target.value)
              }
              className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Estado
            </label>

            <select
              value={newEvent.status}
              onChange={(e) =>
                onNewEventChange("status", e.target.value)
              }
              className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
            >
              <option value="pending">⏳ Pendiente</option>
              <option value="completed">✅ Completado</option>
            </select>
          </div>

        </div>

        <button
          onClick={onAdd}
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Agregar evento
        </button>

      </div>

      {/* LISTADO */}
      <div className="max-w-5xl mx-auto space-y-5">

        {events.length === 0 && (
          <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-14 text-center shadow-sm">
            <div className="text-6xl mb-4">📅</div>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tienes eventos registrados
            </h3>

            <p className="text-gray-500">
              Crea tu primer evento para comenzar a organizarte
            </p>
          </div>
        )}

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            {editingId === event.id ? (

              <div className="space-y-4">

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Título
                  </label>

                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Título"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Descripción
                  </label>

                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Descripción"
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 resize-none focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Fecha
                    </label>

                    <input
                      type="date"
                      value={editDueDate}
                      onChange={(e) => setEditDueDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Estado
                    </label>

                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                    >
                      <option value="pending">⏳ Pendiente</option>
                      <option value="completed">✅ Completado</option>
                    </select>
                  </div>

                </div>

                <button
                  onClick={() => onUpdate(event.id)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Guardar cambios
                </button>

              </div>

            ) : (

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

                <div className="flex-1">

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
                      📌
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {event.title}
                      </h4>

                      <p className="text-sm text-gray-400">
                        Evento académico
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description || "Sin descripción"}
                  </p>

                  <div className="flex flex-wrap gap-3">

                    <span className="bg-slate-100 text-slate-700 text-sm px-4 py-2 rounded-full font-medium">
                      📅 {event.due_date || "Sin fecha"}
                    </span>

                    <span
                      className={`text-sm px-4 py-2 rounded-full font-semibold ${
                        event.status === "completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {event.status === "completed"
                        ? "✅ Completado"
                        : "⏳ Pendiente"}
                    </span>

                  </div>

                </div>

                <div className="flex lg:flex-col gap-3 w-full lg:w-auto">

                  <button
                    onClick={() => onEdit(event)}
                    className="flex-1 lg:w-36 bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-5 rounded-2xl font-semibold transition"
                  >
                    ✏️ Editar
                  </button>

                  <button
                    onClick={() => onDelete(event.id)}
                    className="flex-1 lg:w-36 bg-red-50 hover:bg-red-100 text-red-600 py-3 px-5 rounded-2xl font-semibold transition"
                  >
                    🗑 Eliminar
                  </button>

                </div>

              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default EventsView;