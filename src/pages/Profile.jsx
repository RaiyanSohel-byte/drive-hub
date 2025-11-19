"use client";

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FaUserCircle, FaSignOutAlt, FaKey } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import profileBg from "../assets/profileBg.jpeg";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
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
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading user data...</p>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div
      className="min-h-[calc(100vh-50px)] flex items-center"
      style={{
        backgroundImage: `url(${profileBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        {/* Main Profile Card with Glass Effect */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/30 shadow-2xl p-6 sm:p-8 md:p-10 rounded-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* User Info Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/50"
              />
            ) : (
              <FaUserCircle className="w-20 h-20 sm:w-24 sm:h-24 text-white/70" />
            )}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                {user.displayName || "No Name"}
              </h2>
              <p className="text-white/80 text-sm sm:text-base">{user.email}</p>
            </div>
          </div>

          {/* Dashboard Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: "UID", value: user.uid },
              {
                label: "Email Verified",
                value: user.emailVerified ? "Yes" : "No",
              },
              {
                label: "Account Created",
                value: user.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleString()
                  : "N/A",
              },
              {
                label: "Last Login",
                value: user.metadata?.lastSignInTime
                  ? new Date(user.metadata.lastSignInTime).toLocaleString()
                  : "N/A",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-3 lg:p-4 border border-white/20 rounded-md bg-white/20 backdrop-blur-sm"
                custom={i}
                variants={infoVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-white/70 font-medium text-sm sm:text-base">
                  {item.label}
                </p>
                <p className="text-white font-semibold text-base sm:text-lg">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Logout & Reset Password Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-black/70 text-white font-bold py-3 px-6 rounded-md shadow-md cursor-pointer w-full sm:w-auto justify-center"
            >
              <FaSignOutAlt />
              Log Out
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white text-white font-bold py-3 px-6 rounded-md shadow-md cursor-pointer w-full sm:w-auto justify-center"
            >
              <Link
                to={`/auth/reset-password`}
                className="flex gap-2 items-center justify-center w-full"
              >
                <FaKey /> Reset Password
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
