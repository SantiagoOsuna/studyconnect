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
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          📅 Eventos
        </h2>
        <p className="text-gray-500">
          Gestiona tus reuniones y recordatorios
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">

      <input
        type="text"
        placeholder="Título del evento"
        value={newEvent.title}
        onChange={(e) =>
          onNewEventChange("title", e.target.value)
        }
        className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Descripción"
        value={newEvent.description}
        onChange={(e) =>
          onNewEventChange("description", e.target.value)
        }
        className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="date"
        value={newEvent.due_date}
        onChange={(e) =>
          onNewEventChange("due_date", e.target.value)
        }
        className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={newEvent.status}
        onChange={(e) =>
          onNewEventChange("status", e.target.value)
        }
        className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="pending">Pendiente</option>
        <option value="completed">Completado</option>
      </select>

      <button
        onClick={onAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Agregar evento
      </button>

    </div>

      <div className="max-w-4xl mx-auto grid gap-4">

        {events.length === 0 && (
          <p className="text-center text-gray-400">
            No tienes eventos aún 📅
          </p>
        )}

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >

            {editingId === event.id ? (
              <div className="flex flex-col gap-3">

                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Título"
                  className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Descripción"
                  className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="date"
                  value={editDueDate}
                  onChange={(e) => setEditDueDate(e.target.value)}
                  className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="px-3 py-2 border rounded-lg"
                >
                  <option value="pending">Pendiente</option>
                  <option value="completed">Completado</option>
                </select>

                <button
                  onClick={() => onUpdate(event.id)}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                >
                  Guardar cambios
                </button>
              </div>

            ) : (
              <div className="flex justify-between items-start gap-4">

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    {event.description || "Sin descripción"}
                  </p>

                  <span
                    className={`inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      event.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {event.status === "completed"
                      ? "Completado"
                      : "Pendiente"}
                  </span>
                </div>

                <div className="flex flex-col gap-2">

                  <button
                    onClick={() => onEdit(event)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => onDelete(event.id)}
                    className="text-red-500 hover:underline text-sm"
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
  );
}

export default EventsView;