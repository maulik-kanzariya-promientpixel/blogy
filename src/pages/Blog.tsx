import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogs } from "../hooks/useBlogs";

import Comment from "../components/Comment";
import LikeBtn from "../components/UI/LikeBtn";
import CommentForm from "../components/CommentForm";
import { addCommentById, removeComment } from "../services/comments/commentApi";
import { useUser } from "../hooks/useUser";
import { getCommentById } from "../services/comments/commentApi";
import type { IComments } from "../types/blogy.type";

const Blog: React.FC = () => {
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useBlogs();

  const [comments, setComments] = useState<IComments | null>(null);

  useEffect(() => {
    const getComments = async () => {
      const comment: IComments = await getCommentById(id ?? "");
      setComments(comment);
    };
    getComments();
  }, [blogs]);

  if (!id) {
    navigate("/");
    return null;
  }

  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Blog not found 🚫</p>
      </div>
    );
  }

  const onCommentHandler = (text: string) => {
    addCommentById(id, user!.email, text);
    setComments(null);
  };

  const ondeleteHandler = (commentId: string) => {
    removeComment(id, commentId);
    setComments(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">{blog.title}</h1>

      <div className="flex items-center justify-between text-gray-500 text-sm mb-5">
        <span>✍️ Author: {blog.authorId}</span>
        <span>
          {new Date(blog.createdAt).toLocaleDateString()}{" "}
          {new Date(blog.createdAt).toLocaleTimeString()}
        </span>
      </div>

      {blog.imageUrl && (
        <div className="mb-5">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="text-gray-700 leading-relaxed mb-6">{blog.content}</div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4 text-sm">
        <LikeBtn id={id} likes={blog.likes} />

        <button>💬 {blog.commentsCount} Comments</button>
        <span>🕒 Updated: {new Date(blog.updatedAt).toLocaleDateString()}</span>
      </div>

      <CommentForm onSubmit={onCommentHandler} />

      <div className="flex justify-between items-center border-t border-gray-200 pt-4 text-sm">
        <Comment comments={comments!} onDelete={ondeleteHandler} />
      </div>
    </div>
  );
};

export default Blog;
