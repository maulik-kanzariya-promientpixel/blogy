import React from "react";

const BlogyLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-[shake_2s_infinite]">
        <span className="text-white text-3xl">✍️</span>
      </div>

      <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        Writing something for Bl
        <span className="text-pink-500">o</span>gy
        <span className="inline-flex ml-1 space-x-1">
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-75"></span>
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-300"></span>
        </span>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }
        .animate-[shake_2s_infinite] {
          animation: shake 2s infinite;
        }
        .delay-75 { animation-delay: 0.075s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default BlogyLoader;
