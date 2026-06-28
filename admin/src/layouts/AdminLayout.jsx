import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
  
      <Sidebar />

      <div className="ml-72">

        <Header />

        <div className="p-8">
          <Outlet />
        </div>

      </div>

    </div>
  );
}