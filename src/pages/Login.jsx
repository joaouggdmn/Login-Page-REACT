import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function Login() {
  const { signin } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);
    if (res) {
      setError(res);
      return;
    }
    navigate("/"); // A rota mapeada no seu main.jsx para Home é "/" e não "/home"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(); // Conectando o evento de submit com a função que valida o login
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/60 backdrop-blur"
        >
          <div className="space-y-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Secure Access
            </span>
            <h2 className="text-3xl font-semibold text-slate-100">
              Acesse o sistema
            </h2>
            <p className="text-sm leading-6 text-slate-400">
              Bem-vindo de volta! Por favor, insira suas credenciais para
              acessar sua conta.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block space-y-2 text-sm font-medium text-slate-200">
              E-mail
              <div className="relative">
                <Input
                  type="email"
                  placeholder="voce@exemplo.com"
                  value={email}
                  className="pr-12"
                  onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <FaUser className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-200">
              Senha
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  className="pr-12"
                  onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                <FaLock className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </label>
            <div>
              {error && <span className="text-red-400">{error}</span>}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-cyan-400 focus:ring-cyan-400/30"
              />
              Lembrar-me
            </label>
            <a
              href="#"
              className="font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <Button Text="Entrar" Type="submit" />

          <div className="text-center text-sm text-slate-400">
            Não tem uma conta?{" "}
            <Link
              to="/register"
              className="font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
