import React from "react";
import Header from "../components/UI/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";

const GuestLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;
