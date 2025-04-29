import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { ReactElement } from "react";

const ProtectedRoute = (): ReactElement => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.loading) {
    return <div className="loading-spinner">Cargando...</div>;
  }

  return auth.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;