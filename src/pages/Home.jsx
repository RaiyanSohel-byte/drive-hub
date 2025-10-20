import React from "react";
import bannerImg from "../assets/banner.jpg";
import { Link } from "react-router";
import TypewriterView from "../components/common/TypewriterView";
import { motion } from "framer-motion";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="bg-white lg:grid lg:h-screen lg:place-content-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <motion.div
        className="mx-auto w-screen max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mx-auto max-w-prose text-center">
          <motion.h1
            className="text-4xl font-bold text-white sm:text-5xl"
            variants={itemVariants}
          >
            <TypewriterView />
          </motion.h1>

          <motion.p
            className="mt-4 text-xs text-pretty text-white sm:text-lg/relaxed"
            variants={itemVariants}
          >
            Experience refined performance, cutting-edge design, and unmatched
            comfort. Every detail crafted to redefine your journey and elevate
            your drive.
          </motion.p>

          <motion.div
            className="mt-4 flex justify-center gap-4 sm:mt-6"
            variants={itemVariants}
          >
            <Link
              to={`/cars`}
              className="inline-block rounded border border-gray-400 bg-white px-5 py-3 font-medium text-black shadow-sm transition-colors hover:bg-black hover:text-white"
            >
              Get Started
            </Link>

            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              to={`/about`}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
