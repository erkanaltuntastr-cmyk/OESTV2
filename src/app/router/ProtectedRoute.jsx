// src/app/router/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../../shared/hooks/useAuth";
import { GlobalLoader } from "../../shared/ui/Loader";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <GlobalLoader />;
  if (!user) return <Navigate to="/" replace />;

  return children;
}
