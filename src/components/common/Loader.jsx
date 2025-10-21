"use client";
import React from "react";
import { motion } from "framer-motion";
import car from "../../assets/carVector.png";
const Loader = ({
  carImage, // your car image path
  speed = 3, // seconds for a full loop
  size = 200, // image size
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden relative">
      {/* Moving Road Line */}
      <div className="absolute bottom-1/3 w-full h-1 bg-gray-700/40 overflow-hidden">
        <motion.div
          className="absolute h-1 w-28 bg-white/30 rounded-full"
          animate={{ x: ["0%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
        />
      </div>

      {/* Car Image */}
      <motion.div
        animate={{ x: ["-50vw", "50vw"], y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        <motion.img
          src={carImage || car}
          alt="Loading Car"
          style={{
            width: "300px",
            height: "auto",
          }}
          className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] select-none invert"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="text-white text-lg font-semibold mt-12 tracking-wide"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;
