import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-white text-black">
      <aside className="w-64 bg-white border-r border-gray-200 shadow-md flex flex-col">
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="my-blogs"
            className={({ isActive }) =>
              `px-4 py-2 transition ${
                isActive ? "text-blue-600" : "hover:text-blue-600 text-black"
              }`
            }
          >
            My Blogs
          </NavLink>

          <NavLink
            to="details"
            className={({ isActive }) =>
              `px-4 py-2 transition ${
                isActive ? "text-blue-600" : "hover:text-blue-600 text-black"
              }`
            }
          >
            Details
          </NavLink>

          <NavLink
            to="logout"
            className={`px-4 py-2 transition text-red-500 hover:text-red-600`}
          >
            Logout
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
