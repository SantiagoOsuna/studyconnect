import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardView from "../components/DashboardView";
import UserModal from "../components/UserModal";
import ConfirmModal from "../components/ConfirmModal";
import { updateUser, deleteUser } from "../services/userService";

function Dashboard() {
  const navigate = useNavigate();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    if (user) {
      setFormData({
        name: user.name,
        email: user.email
      });
    }
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    try {
      const updated = await updateUser(user.id, formData);

      localStorage.setItem("user", JSON.stringify(updated));

      alert("Usuario actualizado");
      setIsEditOpen(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(user.id);

      localStorage.clear();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <DashboardView
        onLogout={handleLogout}
        onEditUser={() => setIsEditOpen(true)}
        onDeleteUser={() => setIsDeleteOpen(true)}
      />

      <UserModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleUpdate}
        formData={formData}
        handleChange={handleChange}
      />

      <ConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

export default Dashboard;