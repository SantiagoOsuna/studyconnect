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
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "pending",
  });
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
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

  const handleNewEventChange = (field, value) => {
    setNewEvent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAdd = async () => {
    if (!newEvent.title.trim()) return;

    try {
      const created = await createEvent({
        user_id: 1,
        title: newEvent.title,
        description: newEvent.description,
        due_date: newEvent.due_date,
        status: newEvent.status,
      });

      setEvents((prev) => [...prev, created]);

      setNewEvent({
        title: "",
        description: "",
        due_date: "",
        status: "pending",
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (event) => {
    setEditingId(event.id);

    setEditTitle(event.title);
    setEditDescription(event.description || "");
    setEditDueDate(
      event.due_date
        ? event.due_date.split("T")[0]
        : ""
    );
    setEditStatus(event.status);
  };

  const handleUpdate = async (id) => {
    try {
      const updated = await updateEvent(id, {
        title: editTitle,
        description: editDescription,
        due_date: editDueDate,
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
      newEvent={newEvent}
      onNewEventChange={handleNewEventChange}
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
      editDueDate={editDueDate}
      setEditDueDate={setEditDueDate}
    />
  );
}

export default EventsContainer;
