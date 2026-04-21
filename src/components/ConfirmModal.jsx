function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>¿Eliminar usuario?</h3>
        <p>Esta acción no se puede deshacer</p>

        <div className="modal-buttons">
          <button onClick={onConfirm}>Eliminar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;