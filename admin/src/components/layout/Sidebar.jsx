import Logo from "./Logo";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  Tags,
  Receipt,
  Users,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    navigate("/login", { replace: true });
  }

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-72
      bg-sidebar
      text-white
      flex
      flex-col
      shadow-2xl
      "

    >
      <Logo />

      <nav className="flex-1 px-4 space-y-2">

        <NavItem
          icon={LayoutDashboard}
          title="Dashboard"
          to="/dashboard"
        />

        <NavItem
          icon={ShoppingBag}
          title="Products"
          to="/products"
        />

        <NavItem
          icon={Tags}
          title="Categories"
          to="/categories"
        />

        <NavItem
          icon={Receipt}
          title="Orders"
          to="/orders"
        />

        <NavItem
          icon={Users}
          title="Customers"
          to="/customers"
        />

      </nav>

      <div className="p-5 border-t border-white/10">

        <NavItem
          icon={LogOut}
          title="Logout"
          onClick={handleLogout}
        />
        
      </div>
 
    </aside>
  );
}