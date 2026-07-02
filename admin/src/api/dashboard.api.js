import api from "./axios";

export async function getDashboardStatistics() {
  const { data } = await api.get("/dashboard/statistics");
  return data.data;
}

export function getRecentOrders() {
  return api.get("/dashboard/recent-orders");
}