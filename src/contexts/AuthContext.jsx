import { createContext, useState, useEffect } from "react";

// Criando o contexto
export const AuthContext = createContext({});

// Componente provedor que vai abraçar a nossa aplicação
export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_Token");
    const userStorage = localStorage.getItem("users_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email,
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_Token", JSON.stringify({ email, token }));
        setUser({ email, token });
        return;
      } else {
        return "Email ou senha incorretos.";
      }
    } else {
      return "Usuário não encontrado.";
    }
  };

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já existe uma conta com esse email.";
    }

    let newUser;
    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }
    localStorage.setItem("users_db", JSON.stringify(newUser));
    return "Usuário cadastrado com sucesso!";
  };

  const signout = () => {
    localStorage.removeItem("user_Token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
