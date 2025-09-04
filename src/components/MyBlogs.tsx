import React from "react";
import { useBlogs } from "../hooks/useBlogs";
import { useUser } from "../hooks/useUser";
import type { IBlog } from "../types/blogy.type";
import { deletePost } from "../services/blogs/blogApi";
import { NavLink } from "react-router-dom";

const MyBlogs: React.FC = () => {
  const { blogs } = useBlogs();
  const { user } = useUser();

  const userBlogs = Object.entries<IBlog>(blogs).filter(
    ([blogId, blog]) => blog.authorId === user?.email
  );

  const deleteBlogHandler = (blogId: string) => {
    deletePost(blogId);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📚 My Blogs</h1>

      {userBlogs.length === 0 ? (
        <div className="p-6 bg-white shadow rounded-lg text-gray-500 italic text-center">
          You haven't written any blogs yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {userBlogs.map(([blogId, blog]) => (
            <div
              key={blogId}
              className="p-4 bg-white rounded-lg shadow flex flex-col md:flex-row md:justify-between hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:gap-4">
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-24 h-24 object-cover rounded-lg mb-2 md:mb-0"
                  />
                )}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {blog.content}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {new Date(blog.createdAt).toLocaleDateString()} •{" "}
                    {blog.likes} ❤️ • {blog.commentsCount} 💬
                  </p>
                </div>
              </div>

              <div className="flex h-10 gap-2 mt-2 md:mt-0">
                <button className="px-3 py-1  text-white bg-emerald-400 rounded hover:bg-emerald-700 transition text-sm">
                  <NavLink to={`/blog/${blogId}`}> Read Blog</NavLink>
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                  <NavLink to={`edit/${blogId}`}> Edit</NavLink>
                </button>
                <button
                  onClick={() => deleteBlogHandler(blogId)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
