"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500">
      {/* subtle pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />

      {/* floating glass gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-white/20 via-gray-300/20 to-gray-500/20 blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center p-8 backdrop-blur-xl bg-white/20 dark:bg-gray-900/30 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-800/40"
      >
        {/* White → Gray-300 gradient text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-3 text-gray-300 dark:text-gray-400 max-w-md"
        >
          Oops! The page you’re looking for doesn’t exist or has been moved.
          Let’s take you back to safety.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
