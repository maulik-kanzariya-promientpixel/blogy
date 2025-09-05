import type { IUser } from "../../types/blogy.type";
import api from "../axios";
import type { AxiosResponse } from "axios";

interface ICredentials {
  email: string;
  password: string;
}

export const loginApi = async ({ email, password }: ICredentials) => {
  try {
    const safeEmailKey = email.replace(/\./g, ","); // sanitize email
    const response: AxiosResponse<IUser | null> = await api.get(
      `/users/${safeEmailKey}.json`
    );

    const user = response.data;

    if (!user) {
      return { error: "Email or password is incorrect" };
    }

    if (user.password === password) {
      return user;
    }

    return { error: "Email or password is incorrect" };
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const registerApi = async (user: IUser) => {
  try {
    const safeEmailKey = user.email.replace(/\./g, ",");

    const existingResponse: AxiosResponse<IUser | null> = await api.get(
      `/users/${safeEmailKey}.json`
    );

    if (existingResponse.data) {
      return { error: "User already exists" };
    }

    const createdUser = await api.put(`/users/${safeEmailKey}.json`, user);
    return createdUser.data;
  } catch (error) {
    console.error("Failed to register user:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const editUser = async (email: string, updatedUser: IUser) => {
  const safeEmailKey = email.replace(/\./g, ",");
  const newUser = await api.patch(`/users/${safeEmailKey}.json`, updatedUser);
  return newUser;
};
