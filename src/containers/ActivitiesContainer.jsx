import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActivitiesView from "../components/ActivitiesView";
import {
  getActivities,
  createActivity,
  deleteActivity,
  updateActivity,
} from "../services/activityService";

function ActivitiesContainer() {
  const { subjectId } = useParams();
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "pending",
  });
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editStatus, setEditStatus] = useState("pending");

  useEffect(() => {
    if (subjectId) {
      loadActivities();
    }
  }, [subjectId]);

  const loadActivities = async () => {
    try {
      const data = await getActivities(subjectId);
      setActivities(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewActivityChange = (field, value) => {
    setNewActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAdd = async () => {
  if (!newActivity.title.trim()) return;

  try {
    const created = await createActivity({
      subject_id: Number(subjectId),
      title: newActivity.title,
      description: newActivity.description,
      due_date: newActivity.due_date,
      status: newActivity.status,
    });

    setActivities((prev) => [...prev, created]);

      setNewActivity({
        title: "",
        description: "",
        due_date: "",
        status: "pending",
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (activity) => {
    setEditingId(activity.id);

    setEditText(activity.title);
    setEditDescription(activity.description || "");
    setEditDueDate(
      activity.due_date
        ? activity.due_date.split("T")[0]
        : ""
    );
    setEditStatus(activity.status);
  };

  const handleUpdate = async (id) => {
    try {
      const updated = await updateActivity(id, {
        title: editText,
        description: editDescription,
        due_date: editDueDate,
        status: editStatus,
      });

      setActivities((prev) => prev.map((a) => (a.id === id ? updated : a)));
      setEditingId(null);
      setEditText("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      setActivities((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ActivitiesView
      activities={activities}
      newActivity={newActivity}
      onNewActivityChange={handleNewActivityChange}
      onAdd={handleAdd}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onUpdate={handleUpdate}
      editingId={editingId}
      editText={editText}
      setEditText={setEditText}
      editDescription={editDescription}
      setEditDescription={setEditDescription}
      editStatus={editStatus}
      setEditStatus={setEditStatus}
      editDueDate={editDueDate}
      setEditDueDate={setEditDueDate}
    />
  );
}

export default ActivitiesContainer;
