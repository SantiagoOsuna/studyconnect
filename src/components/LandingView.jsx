import { Link } from "react-router-dom";

function LandingView() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      
      <h1 className="text-5xl font-bold text-gray-800 mb-4 tracking-tight">
        Study<span className="text-blue-600">Connect</span>
      </h1>

      <p className="text-gray-600 text-lg text-center max-w-xl mb-8">
        Organiza tus materias, tareas y eventos en un solo lugar.
        Mantente enfocado y mejora tu productividad académica.
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition transform hover:-translate-y-1">
            Iniciar sesión
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-white border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition">
            Registrarse
          </button>
        </Link>
      </div>

      <p className="mt-12 text-sm text-gray-400">
        © 2026 StudyConnect — Organiza tu estudio inteligente
      </p>

    </div>
  );
}

export default LandingView;