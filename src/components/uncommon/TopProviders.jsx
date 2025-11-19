import React from "react";
import { motion } from "framer-motion";
const TopProviders = () => {
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
      className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-4xl lg:text-5xl font-bold text-center text-white mb-14 tracking-tight"
        variants={itemVariants}
      >
        Top Rated Providers
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto px-6"
        variants={containerVariants}
      >
        {[
          {
            name: "CarShop",
            logo: "https://cdn.vectorstock.com/i/1000v/57/96/car-shop-logo-symbol-or-icon-template-vector-53145796.avif",
            rating: 4.9,
            reviews: 1280,
            tagline: "Precision. Performance. Prestige.",
          },
          {
            name: "SpeedDrive Pro",
            logo: "https://cdn.vectorstock.com/i/1000v/38/47/sport-car-logo-design-fast-silhouette-icon-vector-48573847.jpg",
            rating: 4.8,
            reviews: 1020,
            tagline: "Born for the fast lane.",
          },
          {
            name: "Luxury Motors",
            logo: "https://cdn.vectorstock.com/i/1000v/73/68/car-sale-logo-deal-auto-vector-59047368.avif",
            rating: 5.0,
            reviews: 1495,
            tagline: "Where elegance meets power.",
          },
        ].map((provider, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-xl transition-transform duration-300"
          >
            <div className="flex justify-center mb-6">
              <img
                src={provider.logo}
                alt={provider.name}
                className="h-20 w-20 object-contain filter drop-shadow-lg"
              />
            </div>
            <h4 className="text-2xl font-semibold text-white">
              {provider.name}
            </h4>
            <p className="text-gray-300 text-sm mt-1">{provider.tagline}</p>
            <div className="flex justify-center items-center mt-3 text-yellow-400">
              {"★".repeat(5)}
            </div>
            <p className="text-gray-400 text-xs mt-2">
              {provider.rating} ({provider.reviews} reviews)
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TopProviders;
