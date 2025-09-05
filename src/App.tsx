import React, { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

// utils
import Protected from "./utils/Protected";
import AlreadyLoginProtection from "./utils/AlreadyLoginProtection";
import BlogyLoader from "./components/UI/Loader";

// lazy imports
const GuestLayout = lazy(() => import("./layouts/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Blog = lazy(() => import("./pages/Blog"));
const NewBlog = lazy(() => import("./pages/NewBlog"));
const Profile = lazy(() => import("./pages/Profile"));

// user pages
const MyBlogs = lazy(() => import("./components/MyBlogs"));
const UserDetails = lazy(() => import("./components/UserDetails"));
import Logout from "./components/Logout";
const EditBlog = lazy(() => import("./components/EditBlog"));
const DefaultProfile = lazy(() => import("./components/DefaultProfile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<BlogyLoader />}>
        <GuestLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<BlogyLoader />}>
        <GuestLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<BlogyLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<BlogyLoader />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <AlreadyLoginProtection>
            <Suspense fallback={<BlogyLoader />}>
              <Login />
            </Suspense>
          </AlreadyLoginProtection>
        ),
      },
      {
        path: "register",
        element: (
          <AlreadyLoginProtection>
            <Suspense fallback={<BlogyLoader />}>
              <Register />
            </Suspense>
          </AlreadyLoginProtection>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <Protected>
            <Suspense fallback={<BlogyLoader />}>
              <Blog />
            </Suspense>
          </Protected>
        ),
      },
      {
        path: "new-blog",
        element: (
          <Protected>
            <Suspense fallback={<BlogyLoader />}>
              <NewBlog />
            </Suspense>
          </Protected>
        ),
      },
      {
        path: "profile",
        element: (
          <Protected>
            <Suspense fallback={<BlogyLoader />}>
              <Profile />
            </Suspense>
          </Protected>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<BlogyLoader />}>
                <DefaultProfile />
              </Suspense>
            ),
          },
          {
            path: "my-blogs",
            element: (
              <Suspense fallback={<BlogyLoader />}>
                <MyBlogs />
              </Suspense>
            ),
          },
          {
            path: "my-blogs/edit/:id",
            element: (
              <Suspense fallback={<BlogyLoader />}>
                <EditBlog />
              </Suspense>
            ),
          },
          {
            path: "details",
            element: (
              <Suspense fallback={<BlogyLoader />}>
                <UserDetails />
              </Suspense>
            ),
          },
          {
            path: "logout",
            element: <Logout />,
          },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
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
