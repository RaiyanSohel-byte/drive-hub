"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import bg from "../assets/contactbg.jpg";
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
          className="mt-10 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
          variants={itemVariants}
        >
          <div className="relative flex flex-col sm:flex-row items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200/80 dark:border-gray-600/80 group focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900 transition-all duration-300">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 hidden sm:block" />

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-auto flex-grow bg-transparent sm:pl-12 px-4 py-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none text-center sm:text-left"
              required
            />

            <button
              type="submit"
              className="lg:w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300 shadow-md transform group-hover:scale-105"
            >
              Get Notified
            </button>
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
