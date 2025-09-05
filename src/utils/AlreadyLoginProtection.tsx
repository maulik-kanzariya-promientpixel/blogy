import React from "react";
import { useUser } from "../hooks/useUser";
import { Navigate } from "react-router-dom";

const AlreadyLoginProtection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();

  if (user && localStorage.getItem("blogyUser")) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AlreadyLoginProtection;
