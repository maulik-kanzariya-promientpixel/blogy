import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import type { IUser } from "../types/blogy.type";
import { editUser } from "../services/user/userApi";
import { userDetailsSchema } from "../validation-schema/user.validation";
import { toast } from "react-toastify";

const UserDetails: React.FC = () => {
  const { user } = useUser();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState<IUser>({
    name: user?.name || "",
    email: user?.email || "",
    joinedAt: user?.joinedAt || Date.now(),
    password: user?.password || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await userDetailsSchema.validate(formData);
      editUser(user!.email, formData);
      setIsEditing(false);
    } catch (err) {
      toast.error(
        "Error fetching your blogs please re-try" + JSON.stringify(err)
      );
    }
  };

  return (
    <div className="space-y-4 p-6 bg-white  max-w-md">
      <h1 className="text-2xl font-bold text-gray-800">📝 User Details</h1>

      <div className="space-y-3">
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="mt-1 text-gray-800">{formData.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              disabled={true}
              value={user?.email}
              className="mt-1 bg-gray-200 block w-full border rounded-md px-3 py-2"
            />
          ) : (
            <p className="mt-1 text-gray-800">{formData.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Joined At
          </label>
          <p className="mt-1 text-gray-800">
            {new Date(formData.joinedAt).toLocaleDateString()}
          </p>
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Password
          </label>
          {isEditing ? (
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          ) : (
            <p className="mt-1 text-gray-800">••••••••</p>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
