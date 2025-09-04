import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import type { IUser } from "../types/blogy.type";
import { registerApi } from "../services/user/userApi";
import { useUser } from "../hooks/useUser";
import { registerSchema } from "../validation-schema/register.validation";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUser>({
    email: "",
    name: "",
    password: "",
    joinedAt: Date.now(),
  });

  const { login } = useUser();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await registerSchema.validate(userData);
      const data = await registerApi(userData);
      login(data);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Join Blogy and start sharing your thoughts!
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              placeholder="Your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChangeHandler}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
