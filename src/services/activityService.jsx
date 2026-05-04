const API_URL = "http://localhost:3000/api/activities";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// Obtener actividades por materia
export const getActivities = async (subjectId) => {
    console.log("SUBJECT ID:", subjectId);

    const res = await fetch(`${API_URL}/${subjectId}`, {
        method: "GET",
        headers: getHeaders(),
    });

    const data = await res.json();

    console.log("DATA BACK:", data);

  if (!res.ok) throw new Error("Error al obtener actividades");

  return data;
};

// Crear actividad
export const createActivity = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al crear actividad");

  return await res.json();
};

// Editar actividad
export const updateActivity = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  const response = await res.json();

  if (!res.ok) throw new Error(response.message);

  return response;
};

// Eliminar actividad
export const deleteActivity = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  if (!res.ok) throw new Error("Error al eliminar actividad");
};