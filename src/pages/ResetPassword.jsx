"use client";

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword } = useContext(AuthContext);

  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    forgetPassword(email)
      .then(() => {
        alert("Email Sent");
        navigate("/auth/login");
      })
      .catch((error) => alert(error.code));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="flex items-center justify-center p-4 font-sans relative overflow-hidden min-h-screen">
      <motion.div
        className="p-8 border max-w-md w-full relative z-10 bg-white backdrop-blur-lg shadow-xl border-gray-200 rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-foreground text-3xl md:text-4xl font-bold mb-3 text-center tracking-tight"
          variants={itemVariants}
          custom={0}
        >
          Recover Password
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base md:text-lg mb-8 text-center leading-relaxed"
          variants={itemVariants}
          custom={1}
        >
          Enter your email to receive a reset link
        </motion.p>

        <motion.form
          onSubmit={handleForgetPassword}
          className="mb-6 relative"
          variants={itemVariants}
          custom={2}
        >
          <label
            htmlFor="email"
            className="block text-foreground text-sm font-medium mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              name="email"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 hover:border-black/50 transition-all duration-200 text-base"
              aria-label="Email address for password recovery"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-primary-foreground py-3 rounded-lg font-bold text-lg shadow-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition-all duration-200 text-white bg-black cursor-pointer mt-4"
            aria-label="Send password reset link"
          >
            Send Reset Link
          </motion.button>
        </motion.form>

        <motion.p
          className="text-gray-500 text-center text-sm mt-6 mb-8 leading-relaxed"
          variants={itemVariants}
          custom={3}
        >
          We&apos;ll send you a secure link to reset your password.
        </motion.p>

        <motion.div
          className="border-t border-gray-300 pt-6 text-center"
          variants={itemVariants}
          custom={4}
        >
          <p className="text-gray-600 text-sm">
            Remembered your password?{" "}
            <Link
              to={`/auth/login`}
              className="text-black font-medium hover:underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black rounded-md transition-colors duration-200"
              aria-label="Log in to your account"
            >
              Log in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
