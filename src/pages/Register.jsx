import { useState } from "react";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password || !passConf) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== passConf) {
      setError("As senhas não conferem");
      return;
    }

    const res = signup(email, password);

    if (res !== "Usuário cadastrado com sucesso!") {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
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
              Create Account
            </span>
            <h2 className="text-3xl font-semibold text-slate-100">
              Criar Nova Conta
            </h2>
            <p className="text-sm leading-6 text-slate-400">
              Preencha os dados abaixo para se cadastrar no sistema.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block space-y-2 text-sm font-medium text-slate-200">
              Nome completo
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => [setName(e.target.value), setError("")]}
                name="name"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-200">
              E-mail
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                name="email"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-200">
              Senha
              <Input
                type="password"
                placeholder="Crie uma senha forte"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
                name="password"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-200">
              Confirmar Senha
              <Input
                type="password"
                placeholder="Repita sua senha"
                value={passConf}
                onChange={(e) => [setPassConf(e.target.value), setError("")]}
                name="passConf"
              />
            </label>

            {error && (
              <span className="block text-sm font-semibold text-red-400">
                {error}
              </span>
            )}
          </div>

          <Button Text="Cadastrar" Type="submit" />

          <div className="text-center text-sm text-slate-400">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Fazer Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
