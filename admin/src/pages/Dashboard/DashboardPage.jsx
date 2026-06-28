import { useEffect } from "react";
import { getProfile } from "../../api/auth.api";

export default function DashboardPage() {
  useEffect(() => {
    async function load() {
      try {
        const response = await getProfile();
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, []);

  return (
    <h1>Dashboard Page</h1>
  );
}