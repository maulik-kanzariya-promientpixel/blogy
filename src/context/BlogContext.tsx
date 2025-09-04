import { createContext, useEffect, useRef, useState } from "react";
import type { IBlogs } from "../types/blogy.type"; // IBlogs = { [blogId: string]: IBlog }
import { getAllPosts } from "../services/blogs/blogApi";

interface IBlogContext {
  blogs: IBlogs;
  setBlogs: React.Dispatch<React.SetStateAction<IBlogs>>;
}

const BlogContext = createContext<IBlogContext>({
  blogs: {},
  setBlogs: () => {},
});

export default BlogContext;

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<IBlogs>({});
  const callerTime = useRef<number>(1);

  useEffect(() => {
    let timeoutId: number;

    const fetchPosts = async () => {
      const blogService = await getAllPosts();
      setBlogs(blogService);

      callerTime.current += 1;
      timeoutId = setTimeout(fetchPosts, callerTime.current * 1000);
    };

    fetchPosts();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
