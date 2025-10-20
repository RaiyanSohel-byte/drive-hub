"use client";

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FaUserCircle, FaSignOutAlt, FaKey } from "react-icons/fa";
import { motion } from "framer-motion";
import profileBg from "../assets/profbg.jpg";
import { Link } from "react-router";

const Profile = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => alert("Logged Out Successfully"))
      .catch((error) => alert(error.code));
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
      className="min-h-[calc(100vh-50px)]"
      style={{
        backgroundImage: `url(${profileBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Main Profile Card with Glass Effect */}
        <motion.div
          className="bg-white/30 backdrop-blur-md border border-white/30 shadow-2xl p-8 rounded-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* User Info Header */}
          <div className="flex items-center gap-4 mb-6">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-20 h-20 rounded-full border-2 border-white/50"
              />
            ) : (
              <FaUserCircle className="w-20 h-20 text-white/70" />
            )}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {user.displayName || "No Name"}
              </h2>
              <p className="text-white/80">{user.email}</p>
            </div>
          </div>

          {/* Dashboard Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="p-4 border border-white/20 rounded-lg bg-white/20 backdrop-blur-sm"
                custom={i}
                variants={infoVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-white/70 font-medium">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-8 text-center flex justify-center gap-3 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-black/70 text-white font-bold py-3 px-6 rounded-lg shadow-md cursor-pointer"
            >
              <FaSignOutAlt />
              Log Out
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white text-white font-bold py-3 px-6 rounded-lg shadow-md cursor-pointer"
            >
              <Link
                to={`/auth/reset-password`}
                className="flex gap-2 items-center"
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
