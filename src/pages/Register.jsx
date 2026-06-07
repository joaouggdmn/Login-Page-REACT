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

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label>
          Nome completo:
          <Input
            type="text"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
            name="name"
          />
        </label>
        <label>
          Email:
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            name="email"
          />
        </label>
        <label>
          Senha:
          <Input type="password" name="password" />
        </label>
        <label>
          Confirmar Senha:
          <Input type="password" name="passConf" />
        </label>
        <label>{error}</label>
        <Button Text="Cadastrar" onClick={handleSignup} />
      </form>
    </div>
  );
}
export default Register;
