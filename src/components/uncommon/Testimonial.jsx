"use client";

import React from "react";
import { motion } from "framer-motion";

function Testimonial() {
  const testimonials = [
    {
      name: "Alexa Johnson",
      role: "Automotive Enthusiast",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote:
        "DriveHub made car research effortless. The detailed reviews and specs helped me choose the perfect car for my needs.",
    },
    {
      name: "Daniel Kim",
      role: "Car Reviewer, AutoDaily",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote:
        "The platform’s comparison tools are outstanding. It allowed me to evaluate multiple models side-by-side with ease.",
    },
    {
      name: "Maria Lopez",
      role: "Motor Journalist",
      avatar: "https://i.pravatar.cc/150?img=44",
      quote:
        "I love how DriveHub combines user-friendly design with in-depth car information. Perfect for both enthusiasts and first-time buyers.",
    },
    {
      name: "David Blane",
      role: "Auto Blogger",
      avatar: "https://i.pravatar.cc/150?img=52",
      quote:
        "The site is intuitive and visually appealing. It’s my go-to source for car reviews and industry updates.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="font-sans flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 text-gray-200 bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-6">
        Trusted by Automotive Experts
      </h1>

      <p className="text-base sm:text-lg text-gray-400 text-center max-w-3xl mb-12">
        DriveHub provides in-depth car reviews, comparisons, and expert insights
        to help you make informed decisions when choosing your next vehicle.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full"
        variants={containerVariants}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            variants={cardVariants}
          >
            <p className="text-gray-200 mb-6">{t.quote}</p>
            <div className="flex items-center mt-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/48x48/6B7280/FFFFFF?text=${t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}`;
                }}
              />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Testimonial;
