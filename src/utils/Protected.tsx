import React from "react";
import { useUser } from "../hooks/useUser";
import { Navigate, useLocation } from "react-router-dom";

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    if (!localStorage.getItem("blogyUser")) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  return <>{children}</>;
};

export default Protected;
