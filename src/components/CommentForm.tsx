import React, { useState, type FormEvent } from "react";

const CommentForm: React.FC<{ onSubmit: (text: string) => void }> = ({
  onSubmit,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 rounded-xl p-4 w-full max-w-2xl mx-auto mt-4"
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Share your thoughts..."
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
      />
      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
