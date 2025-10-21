"use client";

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const ArrowBoxIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 10L20 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 4H20V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14L4 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 20H4V15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
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
);

const LockIcon = () => (
  <svg
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
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon = () => (
  <svg
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
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg
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
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const { googleLogin, loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then(() => {
        alert("Login Successful");
        navigate(location?.state || "/");
      })
      .catch((error) => alert(error.code));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => alert("Login Successful"))
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-gray-800 w-full max-w-md bg-white backdrop-blur-lg shadow-2xl p-8 mx-auto border border-gray-200 rounded-sm"
    >
      {/* Back button */}
      <motion.div
        variants={itemVariants}
        custom={0}
        className="flex justify-center mb-6"
      >
        <Link
          to={`/auth/register`}
          className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center border border-gray-200 hover:scale-110 transition-transform"
        >
          <ArrowBoxIcon />
        </Link>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        custom={1}
        className="text-3xl font-bold text-center mb-2 text-gray-900"
      >
        Sign in with email
      </motion.h1>
      <motion.p
        variants={itemVariants}
        custom={2}
        className="text-center text-gray-600 mb-8"
      >
        Make a new doc to bring your words, data, and teams together. For free.
      </motion.p>

      {/* Form */}
      <motion.form onSubmit={handleLogin} className="space-y-6">
        <motion.div variants={itemVariants} custom={3} className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <EmailIcon />
          </span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border-gray-300 border rounded-sm focus:ring-2 focus:ring-sky-500 outline-none transition duration-300 placeholder-gray-500 text-gray-900"
          />
        </motion.div>

        <motion.div variants={itemVariants} custom={4} className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <LockIcon />
          </span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="w-full pl-10 pr-10 py-3 bg-gray-100 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sky-500 outline-none transition duration-300 placeholder-gray-500 text-gray-900"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} custom={5} className="text-right">
          <Link
            to={`/auth/reset-password`}
            className="text-sm font-medium text-gray-600 hover:text-sky-600"
          >
            Forgot password?
          </Link>
        </motion.div>

        <motion.button
          variants={itemVariants}
          custom={6}
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gray-800 text-white font-bold py-3 px-4 rounded-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 shadow-md"
        >
          Get Started
        </motion.button>
      </motion.form>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        custom={7}
        className="flex items-center my-6"
      >
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">Or sign in with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </motion.div>

      {/* Google button */}
      <motion.div
        variants={itemVariants}
        custom={8}
        className="flex justify-center space-x-4"
      >
        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-transform cursor-pointer"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="h-5 w-5"
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Login;
