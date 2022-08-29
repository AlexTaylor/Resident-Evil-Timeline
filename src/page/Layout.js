import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <p>
        <img src="/Resident-Evil-Timeline/images/title.png" alt="Resident Evil Timeline" className="banner" />
      </p>
      <Outlet />
    </>
  );
};

export default Layout;