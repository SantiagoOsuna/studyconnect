const API_URL = "http://localhost:3000/api/events";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// ✅ GET
export const getEvents = async () => {
  const res = await fetch(API_URL, {
    headers: getHeaders(),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

// ✅ POST
export const createEvent = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  const response = await res.json();

  if (!res.ok) throw new Error(response.message);

  return response;
};

// ✅ PUT
export const updateEvent = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  const response = await res.json();

  if (!res.ok) throw new Error(response.message);

  return response;
};

// ✅ DELETE
export const deleteEvent = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  if (!res.ok) throw new Error("Error al eliminar evento");
};