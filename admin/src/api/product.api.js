import api from "./axios";

export async function getProducts(params) {
  const { data } = await api.get("/products", {
    params,
  });

  return data;
}

export async function uploadProductImage(file) {
  const formData = new FormData();

  formData.append("image", file);

  const { data } = await api.post(
    "/products/upload",
    formData,
    {
       headers: {
         "Content-Type": "multipart/form-data",
       },
     }
   );

   return data;
}

export async function createProduct(payload) {
  const { data } = await api.post(
    "/products",
    payload
  );

  return data;
}

export async function updateProduct(id, payload) {
  console.log("UPDATE API CALLED", id);
  const { data } = await api.put(
    `/products/${id}`,
    payload
  );
 
  console.log("UPDATE RESPONSE", data);

  return data;
}

export async function updateProductImage(id, file) {
  const formData = new FormData();
  
  formData.append("image", file);

  const{ data } = await api.put(
    `/products/${id}/image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}

export async function deleteProduct(id) {
  const { data } = await api.delete(
    `/products/${id}`
  );

  return data;
}