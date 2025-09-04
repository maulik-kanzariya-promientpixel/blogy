import { useContext } from "react";
import UserContext from "../context/UserContext";

export const useUser = () => {
  const context = useContext(UserContext);

  if (context) {
    return context;
  }
  throw new Error("cannot use user context outside provider");
};
