import api from "./axios";

export async function getOrders() {
  const { data } = await api.get(
    "/orders/admin/all"
  );

  return data;
}

export async function updateOrderStatus(
  id,
  status
) {
  const { data } = await api.patch(
    `/orders/${id}/status`,
    {
      status,
    }
  );

  return data;
}

