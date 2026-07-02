import api from "./axios";

export async function getCategories() {
  const { data } = await api.get("/categories");

  return data;
}