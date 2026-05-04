import { Link } from "react-router-dom";

function DashboardView({ onLogout, onEditUser, onDeleteUser }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">

        <h2 className="text-2xl font-bold mb-10 tracking-tight">
          Study<span className="text-blue-400">Connect</span>
        </h2>

        <nav className="flex flex-col gap-2">

          <Link
            to="/materias"
            className="px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            📚 Materias
          </Link>

          <Link
            to="/events"
            className="px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            📅 Eventos
          </Link>

        </nav>

        {/* LOGOUT */}
        <button
          onClick={onLogout}
          className="mt-auto bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-semibold"
        >
          Cerrar sesión
        </button>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          
          <h3 className="text-xl font-semibold text-gray-800">
            Panel Principal
          </h3>

          <div className="flex items-center gap-4">

            <button
              onClick={onEditUser}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Editar Perfil
            </button>

            <button
              onClick={onDeleteUser}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Eliminar
            </button>

            <span className="text-gray-600 text-sm">
              Hola, Estudiante
            </span>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">📚 Materias</h4>
            <p className="text-gray-600 text-sm mb-4">
              Gestiona tus materias
            </p>
            <Link
              to="/materias"
              className="text-blue-600 font-medium hover:underline"
            >
              Ir →
            </Link>
          </div>

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">📝 Actividades</h4>
            <p className="text-gray-600 text-sm mb-4">
              Organiza tus tareas
            </p>
            <Link
              to="/materias"
              className="text-blue-600 font-medium hover:underline"
            >
              Ver tareas →
            </Link>
          </div>

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">📅 Eventos</h4>
            <p className="text-gray-600 text-sm mb-4">
              Reuniones y recordatorios
            </p>
            <Link
              to="/events"
              className="text-blue-600 font-medium hover:underline"
            >
              Ir →
            </Link>
          </div>

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">👤 Perfil</h4>
            <p className="text-gray-600 text-sm mb-4">
              Configura tu cuenta
            </p>
            <button
              onClick={onEditUser}
              className="text-blue-600 font-medium hover:underline"
            >
              Editar →
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}

export default DashboardView;