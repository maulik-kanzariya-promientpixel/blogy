import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { IBlog } from "../types/blogy.type";
import { getBlogById, updateBlog } from "../services/blogs/blogApi";
import { editBlogSchema } from "../validation-schema/blog.validation";

const EditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [formData, setFormData] = useState<Partial<IBlog>>({});

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getBlogById(id).then((data) => {
        setBlog(data);
        setFormData(data);
      });
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await editBlogSchema.validate(formData);
      if (id) {
        updateBlog(id, formData as IBlog);
        navigate("/profile/my-blogs");
      }
    } catch (err) {
      alert(err);
    }
  };

  if (!blog) return <div>Loading blog...</div>;

  return (
    <div className="max-w-2xl p-6 bg-white shadow rounded-lg space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">✏️ Edit Blog</h1>

      <div>
        <label className="block text-gray-600 text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 text-sm font-medium">
          Content
        </label>
        <textarea
          name="content"
          value={formData.content || ""}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 text-sm font-medium">
          Image URL
        </label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl || ""}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditBlog;
