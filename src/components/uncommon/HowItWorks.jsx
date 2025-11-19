import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
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
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-24 bg-gray-50 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight"
        variants={itemVariants}
      >
        How It Works
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto px-6"
        variants={containerVariants}
      >
        {[
          {
            step: "01",
            title: "Discover",
            desc: "Browse an exclusive selection of premium cars tailored to your lifestyle.",
            icon: <RiCompassDiscoverLine />,
            color: "from-blue-500 to-indigo-500",
          },
          {
            step: "02",
            title: "Compare",
            desc: "Analyze features, prices, and performance across trusted providers.",
            icon: <IoSettingsSharp />,
            color: "from-purple-500 to-fuchsia-500",
          },
          {
            step: "03",
            title: "Book Instantly",
            desc: "Secure your dream car with one click using encrypted payment methods.",
            icon: <FaCreditCard />,
            color: "from-emerald-500 to-teal-500",
          },
          {
            step: "04",
            title: "Own the Drive",
            desc: "Take the wheel and enjoy an unforgettable driving experience.",
            icon: <FaFireFlameCurved />,
            color: "from-orange-500 to-red-500",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-8 text-center relative"
          >
            <div
              className={`mx-auto mb-5 h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-3xl text-white shadow-lg`}
            >
              {step.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {step.step}. {step.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center mt-16" variants={itemVariants}>
        <Link
          to="/cars"
          className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Start Your Journey →
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
