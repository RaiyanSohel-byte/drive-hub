import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import Car from "../components/common/Car";
import cardBg from "../assets/cardBg.jpg";

const Cars = () => {
  const cars = useLoaderData();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url(${cardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="py-10"
    >
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Explore Our Cars
      </motion.h1>

      {/* Animated Cars Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cars.map((car) => (
          <motion.div key={car.id} variants={cardVariants}>
            <Car car={car} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cars;
