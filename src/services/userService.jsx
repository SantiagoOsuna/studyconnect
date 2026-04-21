const API_URL = "http://localhost:3000/api/users";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
};

export const updateUser = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data)
  });

  const res = await response.json();

  if (!response.ok) throw new Error(res.message);

  return res;
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  });

  const res = await response.json();

  if (!response.ok) throw new Error(res.message);

  return res;
};