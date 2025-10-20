import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router";
import authBg from "../assets/authbg.jpg";
const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main
        className="p-10 min-h-[calc(100vh-66px)]"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
