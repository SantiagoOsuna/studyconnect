const API_URL = "http://localhost:3000/api/subjects";

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
};

// GET
export const getSubjects = async () => {
  const res = await fetch(API_URL, {
    headers: getHeaders()
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

// POST
export const createSubject = async (name, color) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ name, color })
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

// DELETE
export const deleteSubject = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getHeaders()
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};