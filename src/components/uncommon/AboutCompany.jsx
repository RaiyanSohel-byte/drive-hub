"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBulb } from "react-icons/tb";
import { FaTree } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { RiFocus3Line } from "react-icons/ri";

const AboutCompany = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add your image URLs here
  const images = [
    "https://images.pexels.com/photos/9452195/pexels-photo-9452195.jpeg",
    "https://images.pexels.com/photos/376674/pexels-photo-376674.jpeg",
    "https://images.pexels.com/photos/12356888/pexels-photo-12356888.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="relative font-sans transition-colors overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="relative w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-32 max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div className="w-full text-center mb-16" variants={itemFadeUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-6">
            About <span className="lobster font-normal">DriveHub</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            DriveHub is a cutting-edge platform revolutionizing the automotive
            experience. Our mission is to combine innovation, performance, and
            sustainability, delivering exceptional service to every driver.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Carousel */}
          <motion.div
            className="flex-1 relative w-full h-64 md:h-96 rounded-2xl overflow-hidden"
            variants={itemFadeUp}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`DriveHub Image ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            variants={container}
          >
            <motion.p
              className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed"
              variants={itemFadeUp}
            >
              At DriveHub, we believe in the power of technology to transform
              driving. From electric cars to high-performance vehicles, our team
              ensures every aspect of your driving journey is seamless, safe,
              and exhilarating.
            </motion.p>

            {/* Glassmorphic highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "Pioneering cutting-edge automotive technology for the next generation.",
                  icon: <TbBulb />,
                },
                {
                  title: "Sustainability",
                  desc: "Eco-friendly solutions for a greener and cleaner driving future.",
                  icon: <FaTree />,
                },
                {
                  title: "Performance",
                  desc: "Delivering top-tier driving experiences that excite and inspire.",
                  icon: <GrDocumentPerformance />,
                },
                {
                  title: "Customer Focus",
                  desc: "Providing exceptional support and service to every driver on our platform.",
                  icon: <RiFocus3Line />,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-white/10 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    {item.title} {item.icon}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCompany;
