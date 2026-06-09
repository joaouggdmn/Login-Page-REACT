import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export default function PrivateRoute() {
  const { signed, loading } = useAuthContext();

  if (loading) return null;

  return signed ? <Outlet /> : <Navigate to="/login" replace />;
}
