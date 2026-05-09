export const API_BASE_URL = "http://studyconnect-env.eba-wvqpk8ks.us-east-1.elasticbeanstalk.com/api";

export const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});
