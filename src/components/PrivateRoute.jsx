import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoute() {
  const { isLogged } = useContext(AuthContext);

  // Se estiver logado, continua para a rota solicitada (<Outlet />)
  // Caso contrário, redireciona para a página de login
  return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
}