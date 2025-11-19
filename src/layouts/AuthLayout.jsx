import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router";
import authBg from "../assets/authbg.jpg";
import { Toaster } from "react-hot-toast";
const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main
        className="py-10 px-4 min-h-[calc(100vh-66px)]"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Outlet />
      </main>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgba(31, 41, 55, 0.85)", // dark theme bg
            color: "#E5E7EB", // text-gray-200
            border: "1px solid rgba(75, 85, 99, 0.7)", // border-gray-800/70
            borderRadius: "1rem",
            padding: "1rem 1.5rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            fontWeight: 500,
            fontFamily: "inherit",
          },
          success: {
            style: {
              background: "rgba(22, 163, 74, 0.9)", // green
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "rgba(220, 38, 38, 0.9)", // red
              color: "#fff",
            },
          },
          loading: {
            style: {
              background: "rgba(37, 99, 235, 0.9)", // blue
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default AuthLayout;
