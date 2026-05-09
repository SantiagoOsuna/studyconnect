import { API_BASE_URL } from "./apiConfig";

const API_URL = `${API_BASE_URL}/users`;

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  console.log("DATA BACK:", data);

  if (!response.ok) {
    throw new Error(data.message || "Error en login");
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("isAuthenticated", "true");

  return data;
};

export const register = async (name, email, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();

  console.log("REGISTER BACK:", data);

  if (!response.ok) {
    throw new Error(data.message || "Error en registro");
  }

  return data;
};