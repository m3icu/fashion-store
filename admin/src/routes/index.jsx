import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import OrdersPage from "../pages/Orders/OrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
     
      {
        path: "/orders",
        element: <OrdersPage />,
      }
    ],
  },
]);

export default router;