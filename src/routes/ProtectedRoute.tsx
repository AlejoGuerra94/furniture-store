import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const ProtectedRoute = () => {
  const auth = useAuth();

  return auth.isAutehnticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
