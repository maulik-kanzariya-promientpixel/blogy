import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApi } from "../services/user/userApi";
import { useUser } from "../hooks/useUser";

import { loginSchema } from "../validation-schema/login.validation";
import type { IUser } from "../types/blogy.type";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { login } = useUser();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log("login clicked");

    try {
      await loginSchema.validate({
        email: userCredentials.email,
        password: userCredentials.password,
      });

      const data: IUser | { error: string } = await loginApi(userCredentials);

      if ("error" in data) {
        toast.error(data.error);
      } else {
        login(data);
        navigate(-1);
      }
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null && "errors" in err) {
        const errors = (err as { errors: string[] }).errors;
        if (Array.isArray(errors)) {
          console.log(errors.join(", "));
          toast.error(errors.join(", "));
        }
      }
      toast.error("Error logeed in user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Login to access your Blogy account
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
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
              id="password"
              onChange={onChangeHandler}
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
