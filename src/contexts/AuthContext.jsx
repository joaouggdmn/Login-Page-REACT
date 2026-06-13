import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem("user_Token");
    const userStorage = localStorage.getItem("users_db");

    if (userToken && userStorage) {
      const parsedToken = JSON.parse(userToken);
      const parsedUsers = JSON.parse(userStorage);
      const hasUser = parsedUsers?.find(
        (storedUser) => storedUser.email === parsedToken.email,
      );

      if (hasUser) {
        setUser({ name: hasUser.name, email: hasUser.email, token: parsedToken.token });
      }
    }

    setLoading(false);
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const hasUser = usersStorage?.find(
      (storedUser) => storedUser.email === email,
    );

    if (hasUser) {
      if (hasUser.email === email && hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_Token", JSON.stringify({ email, token }));
        setUser({ name: hasUser.name, email, token });
        return;
      }

      return "Email ou senha incorretos.";
    }

    return "Usuário não encontrado.";
  };

  const signup = (name, email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const hasUser = usersStorage?.find(
      (storedUser) => storedUser.email === email,
    );

    if (hasUser) {
      return "Já existe uma conta com esse email.";
    }

    const newUser = usersStorage
      ? [...usersStorage, { name, email, password }]
      : [{ name, email, password }];

    localStorage.setItem("users_db", JSON.stringify(newUser));
    return "Usuário cadastrado com sucesso!";
  };

  const signout = () => {
    localStorage.removeItem("user_Token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, loading, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
