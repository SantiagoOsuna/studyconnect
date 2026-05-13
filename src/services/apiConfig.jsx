export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://295tji0qyh.execute-api.us-east-1.amazonaws.com/api";

export const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const handleApiError = (error) => {
  if (error.message === 'Failed to fetch') {
    return 'Error de conexión. Verifica tu conexión a internet.';
  }
  return error.message || 'Ocurrió un error al procesar la solicitud';
};
