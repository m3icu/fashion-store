import api from "./axios";

export async function login(data) {
  const response = await api.post("/auth/login", data);

  return response.data;
}

export async function getProfile() {
  const response = await api.get("/auth/me");

  return response.data;
}