import { useQuery } from "@tanstack/react-query";
import { getRecentOrders } from "../api/dashboard.api";

export default function useRecentOrders() {
  return useQuery({
    queryKey: ["recent-orders"],
    queryFn: async () => {
      const response = await getRecentOrders();
      return response.data.data;
    },
  });
}