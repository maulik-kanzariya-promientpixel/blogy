import React from "react";

const DefaultProfile: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="text-center p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">👋 Welcome!</h1>
        <p className="text-gray-700 text-lg">
          This is your profile page. Start by creating a blog or updating your
          details.
        </p>
      </div>
    </div>
  );
};

export default DefaultProfile;
