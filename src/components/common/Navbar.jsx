"use client";

import React, { useContext } from "react";
import { IoCarSport } from "react-icons/io5";
import { NavLink, useLocation } from "react-router";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { GrLogin } from "react-icons/gr";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logoutUser()
      .then(() => alert("Logged Out Successfully"))
      .catch((error) => alert(error.code));
  };

  const linksData = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Cars", path: "/cars" },
    { label: "Contact", path: "/contact" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown Menu for Mobile */}
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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

          {/* Logo */}
          <NavLink to={`/`} className="btn btn-ghost text-xl lobster">
            <IoCarSport size={32} /> Drive{" "}
            <span className="text-black">Hub</span>
          </NavLink>
        </div>

        {/* Center Links */}
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
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <h3 className="text-black font-semibold hidden lg:flex items-center gap-2 text-lg lobster">
                <FaUserCircle size={24} /> {user.displayName}
              </h3>

              {/* Animated Logout Button */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#1a1a1a",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogOut}
                className="btn bg-black text-white rounded-none border-none shadow-sm hover:shadow-lg transition-transform duration-200"
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
