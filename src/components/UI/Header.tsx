import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Header: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <header className="bg-white/20 backdrop-blur-lg text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-black">Blogy</div>
        <ul className="flex space-x-8">
          <NavLink
            to={"/"}
            className="cursor-pointer text-black hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to={"/blogs"}
            className="cursor-pointer text-black hover:text-blue-500 transition-colors duration-300"
          >
            Blogs
          </NavLink>
        </ul>
        <div>
          <button>
            {!user ? (
              <NavLink
                className={
                  "bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-lg"
                }
                to={"/login"}
              >
                {" "}
                Explore Blogy
              </NavLink>
            ) : (
              <select
                className="p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
                onChange={(e) => {
                  if (e.target.value) {
                    navigate(e.target.value);
                  }
                }}
              >
                <option value="/">Home</option>
                <option value="/new-blog">Add New Blog</option>
                <option value="/profile">User Profile</option>
              </select>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
