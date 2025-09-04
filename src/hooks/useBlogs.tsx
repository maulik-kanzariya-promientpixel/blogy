import { useContext } from "react";
import BlogContext from "../context/BlogContext";

export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (context) {
    return context;
  }
  throw new Error("cannot use blog context outside provider");
};
