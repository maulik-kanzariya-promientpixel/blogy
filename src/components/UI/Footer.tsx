import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Blogy</h2>
          <p className="text-gray-500">
            Your go-to platform for modern blogging. Share, explore, and engage
            with the community.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-blue-600 transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="hover:text-blue-600 transition-colors"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="hover:text-blue-600 transition-colors"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <NavLink
              to="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Blogy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
