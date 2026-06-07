import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export default function PrivateRoute() {
  const { isLogged } = useAuthContext();

  // Se estiver logado, continua para a rota solicitada (<Outlet />)
  // Caso contrário, redireciona para a página de login
  return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
}
