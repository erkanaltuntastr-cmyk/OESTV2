// src/app/router/GuestRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../../shared/hooks/useAuth";
import { GlobalLoader } from "../../shared/ui/Loader";

export function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <GlobalLoader />;
  if (user) return <Navigate to="/welcome" replace />;

  return children;
}
