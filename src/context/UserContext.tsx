import React, { createContext, useEffect, useState } from "react";
import type { IUser } from "../types/blogy.type";

interface IUserContext {
  user: IUser | null;
  login: (userCredentials: IUser) => void;
  logout: () => void;
}

const UserContext = createContext<IUserContext | null>(null);

export default UserContext;

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("blogyUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse stored user:", error);
      localStorage.removeItem("blogyUser");
    }
  }, []);

  const login = (userCredentials: IUser) => {
    localStorage.setItem("blogyUser", JSON.stringify(userCredentials));
    setUser(userCredentials);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("blogyUser");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
