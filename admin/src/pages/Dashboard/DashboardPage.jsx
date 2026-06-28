import { useEffect } from "react";
import { getProfile } from "../../api/auth.api";

export default function DashboardPage() {
  useEffect(() => {
    async function load() {
      try {
        const response = await getProfile();
        console.log(response.data);
      } catch (error) {
        console.log("Status:", error.response?.status);
        console.log("Data:", error.response?.data);
        console.log("Headers:", error.response?.headers);
      }
    }

    load();
  }, []);

  return (
    <div className="bg-surface rounded-card border border-border p-8 shadow-card">
      <h1 className="text-3xl font-bold text-text">
        Dashboard
      </h1>

      <p className="mt-3 text-text-secondary">
        Admin dashboard sedang bekerja
      </p>
    </div>
  );
}