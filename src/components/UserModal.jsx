function UserModal({ isOpen, onClose, onSave, formData, handleChange }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Editar Usuario</h3>

        <input
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Nombre"
        />

        <input
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
        />

        <div className="modal-buttons">
          <button onClick={onSave}>Guardar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;