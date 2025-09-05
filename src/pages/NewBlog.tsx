import React, { useEffect, useState } from "react";
import type { IBlog } from "../types/blogy.type";
import { useUser } from "../hooks/useUser";
import { sendPost } from "../services/blogs/blogApi";
import { useNavigate } from "react-router-dom";
import { newBlogSchema } from "../validation-schema/blog.validation";
import { toast } from "react-toastify";

const NewBlog: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IBlog>({
    title: "",
    content: "",
    authorId: "",
    imageUrl: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likes: 0,
    commentsCount: 0,
  });

  useEffect(() => {
    if (user?.email) {
      setFormData((prev) => ({ ...prev, authorId: user.email }));
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      updatedAt: Date.now(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blogToSubmit: IBlog = {
        ...formData,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      await newBlogSchema.validate(blogToSubmit);
      sendPost(blogToSubmit).then((data) => {
        console.log(data);
        navigate("/blogs");
      });
    } catch (err: unknown) {
      toast.error(String(err));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        ✍️ Create New Blog
      </h2>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Author</label>
        <input
          type="text"
          name="authorId"
          disabled
          value={formData.authorId}
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Image URL
        </label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Enter image URL"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write Your Blogy Content Here ..."
          className="w-full border rounded-lg px-3 py-2 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Publish Blog
      </button>
    </form>
  );
};

export default NewBlog;
