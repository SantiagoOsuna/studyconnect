import { API_BASE_URL, getAuthHeaders } from "./apiConfig";

const API_URL = `${API_BASE_URL}/users`;

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