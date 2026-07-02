import api from "./axios";

export async function getProducts(params) {
  const { data } = await api.get("/products", {
    params,
  });

  return data;

}