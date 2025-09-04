import { useEffect } from "react";
import { useUser } from "../hooks/useUser";

const Logout = () => {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  });

  return <div>Logout</div>;
};

export default Logout;
