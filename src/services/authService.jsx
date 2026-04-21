const API_URL = "http://localhost:3000/api";

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
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
  const response = await fetch(`http://localhost:3000/api/users/register`, {
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