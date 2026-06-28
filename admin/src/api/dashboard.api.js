import axiosInstance from "./axios";

export function getDashboardStatistics() {
  return axiosInstance.get('/dashoboard/statistics');
}