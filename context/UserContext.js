"use client"
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/check-auth");
        if (!res.ok) throw new Error("Not authenticated");
        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
