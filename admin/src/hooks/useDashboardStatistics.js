import { useQuery } from "@tanstack/react-query";
import { getDashboardStatistics } from "../api/dashboard.api";

export default function useDashboardStatistics() {
  return useQuery({
    queryKey: ["dashboard.statistics"],
    queryFn: getDashboardStatistics,
  });
}