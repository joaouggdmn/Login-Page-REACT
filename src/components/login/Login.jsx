import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-slate-800 px-4 py-12 text-slate-100">
      <div className="mx-auto w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/60"
        >
          <div className="space-y-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Secure Access
            </span>
            <h2 className="text-2xl font-semibold text-slate-100">
              Acesse o sistema
            </h2>
            <p className="text-sm text-slate-400">
              Bem-vindo de volta! Por favor, insira suas credenciais para acessar sua conta.
            </p>
          </div>

          <div className="space-y-4">
            <label className="space-y-2 text-sm font-medium text-slate-200">
              E-mail
              <div className="relative">
                <input
                  type="email"
                  placeholder="voce@exemplo.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 pr-11 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/25"
                />
                <FaUser className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-200">
              Senha
              <div className="relative">
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 pr-11 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/25"
                />
                <FaLock className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </label>
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

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-200 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Entrar
          </button>

          <div className="text-center text-sm text-slate-400">
            Nao tem uma conta?{" "}
            <a
              href="#"
              className="font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
