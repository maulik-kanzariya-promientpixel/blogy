import React from "react";
import type { IBlogs } from "../../types/blogy.type";
import ReadMoreButton from "../UI/ReadMoreButton";

const BlogList: React.FC<{ blogs: IBlogs }> = ({ blogs }) => {
  const blogIds = Object.keys(blogs);

  return (
    <>
      {blogIds.map((id) => {
        const blog = blogs[id];
        return (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                {blog.content}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">
                  Likes: {blog.likes}
                </span>
                <ReadMoreButton id={id} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogList;
