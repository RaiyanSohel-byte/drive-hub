"use client";

import React, { useContext, useState } from "react";
import { IoCarSport } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { GrLogin } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You won't be able to revert this!",
      color: "#374151",
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      background: "rgba(255, 255, 255, 0.8)",
      confirmButtonColor: "black",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      customClass: {
        popup:
          "rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/15",
        title: "font-semibold text-xl",

        confirmButton:
          "text-black dark:text-white font-semibold tracking-wide rounded-md shadow-sm hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-200",
        cancelButton:
          "font-semibold tracking-wide rounded-md shadow-sm hover:shadow-md transition-all",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser()
          .then(() => console.log("Logged Out Successfully"))
          .catch((error) => toast.error(error.code));
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out.",
          icon: "success",
        });
      }
    });
  };

  const linksData = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Cars", path: "/cars" },
    { label: "Contact", path: "/contact" },
  ];

  if (user) {
    linksData.push({ label: "Profile", path: "/profile" });
  }

  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {user && (
                <h3 className="lg:hidden text-black font-semibold flex items-center gap-2 text-sm ml-2 mb-3">
                  <FaUserCircle size={16} /> {user.displayName}
                </h3>
              )}
              {linksData.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="relative px-2 py-1 text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeLink"
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-black rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to={`/`} className="btn btn-ghost text-2xl lobster">
            <IoCarSport size={36} /> DriveHub
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {linksData.map((link, i) => (
              <li key={i} className="relative">
                <NavLink
                  to={link.path}
                  className="relative text-gray-600 hover:text-black px-2 py-1 transition-colors"
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-black rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-1 lg:gap-3 relative overflow-visible">
          {user ? (
            <>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />{" "}
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow "
                  >
                    <div className="card-body border text-black">
                      <span className="text-lg font-bold">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <Link
                          to={`/cart`}
                          className="inline-block rounded border border-gray-200 px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium bg-black text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                        >
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Tooltip */}
              <div
                className="relative overflow-visible"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="cursor-pointer items-center justify-center hidden lg:flex bg-gray-800 text-white w-10 h-10 rounded-full hover:scale-105 transition-transform">
                  <FaUserCircle size={28} />
                </div>

                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-12 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-semibold whitespace-nowrap
                             backdrop-blur-md bg-white/20 dark:bg-gray-800/40 border border-white/20 rounded-lg
                             text-gray-900 dark:text-gray-100 shadow-lg z-50"
                    >
                      {user.displayName}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Logout Button */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#1a1a1a",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogOut}
                className="btn btn-xs md:btn-md bg-black text-white rounded-md border-none shadow-sm hover:shadow-lg transition-transform duration-200"
              >
                <FaSignOutAlt /> Log Out
              </motion.button>
            </>
          ) : (
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to={`/auth/login`}
                className="btn bg-black text-white rounded-none border-none shadow-sm hover:shadow-lg transition-transform duration-200"
              >
                <GrLogin /> Login
              </NavLink>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
