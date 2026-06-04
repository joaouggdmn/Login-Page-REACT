import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
      <form>
        <h2>Acesse o sistema</h2>
        <div>
          <input type="email" placeholder="E-mail" />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
          <FaLock className="icon" />
        </div>

        <div>
            <label>
                <input type="checkbox" />
                Lembrar-me
            </label>
            <a href="#">Esqueceu sua senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
