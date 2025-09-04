import React from "react";
import { useUser } from "../hooks/useUser";
import { Navigate, useLocation } from "react-router-dom";

const AlreadyLoginProtection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user && !localStorage.getItem("blogyUser")) {
    return <>{children}</>;
  }

  return <Navigate to="/" replace />;
};

export default AlreadyLoginProtection;
