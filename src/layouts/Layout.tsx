import React from "react";
import Header from "../components/UI/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const GuestLayout: React.FC = () => {
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
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;
