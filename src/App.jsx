import { Outlet, NavLink } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";

export default function App() {
  const { signed, signout } = useAuthContext();

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-cyan-300 text-slate-950 font-semibold"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div>
      <nav className="bg-gray-900 shadow-md p-4 flex items-center justify-center gap-6">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        {signed ? (
          <button
            onClick={signout}
            className="px-4 py-2 rounded-md transition-colors text-red-400 hover:bg-red-900/50"
          >
            Sair (Logout)
          </button>
        ) : (
          <>
            <NavLink to="/login" className={navLinkStyles}>
              Login
            </NavLink>
            <NavLink to="/register" className={navLinkStyles}>
              Cadastrar-se
            </NavLink>
          </>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
