import { useState, useEffect } from "react";
import EventsView from "../components/EventsView";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../services/eventService";

function EventsContainer() {
  const [events, setEvents] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("pending");

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    if (!newTitle.trim()) return;

    try {
      const created = await createEvent({
        title: newTitle,
        description: "",
        due_date: new Date().toISOString().split("T")[0],
        status: "pending",
      });

      setEvents((prev) => [...prev, created]);
      setNewTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setEditTitle(event.title);
    setEditDescription(event.description || "");
    setEditStatus(event.status);
  };

  const handleUpdate = async (id) => {
    try {
      const updated = await updateEvent(id, {
        title: editTitle,
        description: editDescription,
        due_date: new Date().toISOString().split("T")[0],
        status: editStatus,
      });

      setEvents((prev) => prev.map((e) => (e.id === id ? updated : e)));
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EventsView
      events={events}
      newTitle={newTitle}
      setNewTitle={setNewTitle}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      editingId={editingId}
      editTitle={editTitle}
      setEditTitle={setEditTitle}
      editDescription={editDescription}
      setEditDescription={setEditDescription}
      editStatus={editStatus}
      setEditStatus={setEditStatus}
    />
  );
}

export default EventsContainer;
