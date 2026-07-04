import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ProductsPage from "../pages/Products/ProductsPage";
import CategoryPage from "../pages/Categories/CategoryPage";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
    
        {/* Redirect root ke Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/categories" element={<CategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}