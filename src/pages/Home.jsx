import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/form/Button";
import useAuthContext from "../hooks/useAuthContext";

function Home() {
  const { signout } = useAuthContext();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() =>{
    const userStorage = JSON.parse(localStorage.getItem("users_db"));
    setUser(userStorage);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
      <div className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center">
        <div className="space-y-8 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 text-center shadow-2xl shadow-slate-950/60 backdrop-blur">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100">
            Home
          </h1>
          <p className="text-sm leading-6 text-slate-400">
            {user?.name}
          </p>

          <Button Text="Sair" onClick={() => [signout(), navigate("/login")]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
