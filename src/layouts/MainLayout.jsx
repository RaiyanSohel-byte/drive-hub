import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import ScrollToTop from "../components/common/ScrollToTop";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <ScrollToTop />
        {state === "loading" ? <Loader /> : <Outlet />}
      </main>
      <footer>
        <Footer />
      </footer>
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

export default MainLayout;
