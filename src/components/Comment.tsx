import React from "react";
import type { IComments } from "../types/blogy.type";
import { useUser } from "../hooks/useUser";
import BlogyLoader from "./UI/Loader";

const Comment: React.FC<{
  comments: IComments;
  onDelete: (commentId: string) => void;
}> = ({ onDelete, comments }) => {
  const { user } = useUser();

  const ondeleteHandler = (id: string) => {
    onDelete(id);
  };

  if (!comments || Object.keys(comments).length === 0) {
    return (
      <div className="mt-4 text-gray-500 text-center">No comments yet.</div>
    );
  }

  if (!comments) {
    console.log(comments);
    return <BlogyLoader />;
  }

  return (
    <div className="mt-4">
      {Object.entries(comments).map(([commentId, c]) => {
        const isOwner = user!.email.toString() === c.userId.toString();

        return (
          <div
            key={commentId}
            className="p-3 border rounded-lg mb-3 bg-gray-50 shadow-sm"
          >
            <p className="text-gray-800">{String(c.text)}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <span>👤 {String(c.userId)}</span>
              <div className="flex items-center gap-3">
                <span>
                  {typeof c.createdAt === "number"
                    ? new Date(c.createdAt).toLocaleString()
                    : ""}
                </span>
                {isOwner && (
                  <button
                    onClick={() => ondeleteHandler(commentId)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    🗑️ Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
