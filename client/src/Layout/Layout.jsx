import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
