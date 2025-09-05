import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import GuestLayout from "./layouts/Layout";

// pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./utils/Protected";
import Blog from "./pages/Blog";
import NewBlog from "./pages/NewBlog";
import Profile from "./pages/Profile";

// user pages
import MyBlogs from "./components/MyBlogs";
import UserDetails from "./components/UserDetails";
import Logout from "./components/Logout";
import EditBlog from "./components/EditBlog";
import DefaultProfile from "./components/DefaultProfile";
import AlreadyLoginProtection from "./utils/AlreadyLoginProtection";
import { Bounce, ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      {
        path: "login",
        element: (
          <AlreadyLoginProtection>
            <Login />
          </AlreadyLoginProtection>
        ),
      },
      {
        path: "register",
        element: (
          <AlreadyLoginProtection>
            <Register />
          </AlreadyLoginProtection>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <Protected>
            <Blog />
          </Protected>
        ),
      },
      {
        path: "new-blog",
        element: (
          <Protected>
            <NewBlog />
          </Protected>
        ),
      },
      {
        path: "profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
        children: [
          { index: true, element: <DefaultProfile /> },
          { path: "my-blogs", element: <MyBlogs /> },
          { path: "my-blogs/edit/:id", element: <EditBlog /> },
          { path: "details", element: <UserDetails /> },
          { path: "logout", element: <Logout /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
