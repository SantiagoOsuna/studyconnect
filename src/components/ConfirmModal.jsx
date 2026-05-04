function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 animate-fadeIn">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 text-red-600 p-3 rounded-full text-xl">
            ⚠️
          </div>
        </div>

        {/* TEXT */}
        <h3 className="text-lg font-semibold text-center text-gray-800">
          ¿Eliminar usuario?
        </h3>

        <p className="text-sm text-gray-500 text-center mt-2">
          Esta acción no se puede deshacer
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          >
            Eliminar
          </button>

        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;