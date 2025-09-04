import React from "react";
import { useBlogs } from "../hooks/useBlogs";
import BlogList from "../components/UI/BlogList";

const Blogs: React.FC = () => {
  const { blogs } = useBlogs();

  return (
    <section className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            All Blogs
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore the latest insights from our community. Read, share, and
            engage!
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogList blogs={blogs} />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
