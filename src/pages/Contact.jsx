"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import bg from "../assets/contactbg.jpg";
import { FaCar } from "react-icons/fa";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
const Newsletter = () => {
  return (
    <div
      className="relative font-sans w-full min-h-screen flex items-center justify-center overflow-hidden p-4 bg-white dark:bg-black transition-colors duration-300"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="relative z-10 container mx-auto text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {}

        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-800 dark:text-gray-100"
          variants={itemVariants}
        >
          Have questions or want to book a test drive? Fill out the form below
          or contact us directly.
        </motion.h2>

        {}

        <motion.p
          className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto lg:font-semibold"
          variants={itemVariants}
        >
          A cutting-edge platform where entrepreneurs, indie hackers, investors,
          and VCs connect, collaborate, and fund the next big thing.
        </motion.p>

        {}

        <motion.form
          className="mt-12 max-w-md mx-auto border border-white rounded-xl"
          onSubmit={(e) => e.preventDefault()}
          variants={itemVariants}
        >
          <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-all duration-500 hover:shadow-2xl hover:border-white/40 ">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-200/80" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/30 dark:bg-gray-700/40 text-white placeholder:text-gray-200/70 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/40 transition-all duration-300 border border-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-white to-gray-500 text-black hover:text-white font-semibold hover:from-black hover:to-gray-600 shadow-lg hover:shadow-gray-500 transition-all duration-300 active:scale-95"
              >
                Get Notified
              </button>
            </div>
          </div>
        </motion.form>

        {}

        <motion.div
          className="mt-8 flex items-center justify-center space-x-3"
          variants={itemVariants}
        >
          <div className="flex -space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User 1"
            />

            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User 2"
            />

            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="User 3"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              10k+
            </span>{" "}
            joined already
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default function Contact() {
  return <Newsletter />;
}
