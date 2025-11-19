import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Gauge, DollarSign } from "lucide-react";
import { SiTransmission } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router";

const CarDetails = () => {
  const cars = useLoaderData();
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));
  const {
    image,
    model,
    brand,
    description,
    year,
    price,
    fuelType,
    transmission,
    mileage,
    rating,
  } = car;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-20 text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />{" "}
      <motion.div
        className="relative w-full lg:w-1/2 space-y-6 p-6 bg-white/1 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl z-10"
        variants={fadeInUp}
      >
        <motion.div className="w-full lg:w-1/2 p-6 mx-auto" variants={fadeInUp}>
          <motion.img
            src={image}
            alt={model}
            className="rounded-3xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.h1
          className="text-4xl text-center font-extrabold tracking-tight text-gray-300 "
          variants={fadeInUp}
        >
          {brand} {model}
        </motion.h1>

        <motion.p
          className="text-gray-300 text-center text-sm sm:text-base leading-relaxed"
          variants={fadeInUp}
        >
          {description || "A perfect blend of power, precision, and luxury."}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-200"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center bg-white/10 rounded-xl p-3 backdrop-blur-md">
            <Calendar className="h-6 w-6 mb-1 text-gray-400" />
            <span className="text-sm font-semibold">{year}</span>
            <p className="text-xs">Year</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 rounded-xl p-3 backdrop-blur-md">
            <Gauge className="h-6 w-6 mb-1 text-gray-400" />
            <span className="text-sm font-semibold">{mileage} km</span>
            <p className="text-xs">Mileage</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 rounded-xl p-3 backdrop-blur-md">
            <DollarSign className="h-6 w-6 mb-1 text-gray-400" />
            <span className="text-sm font-semibold">${price}</span>
            <p className="text-xs">Price</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 rounded-xl p-3 backdrop-blur-md">
            <Star className="h-6 w-6 mb-1 text-gray-400" />
            <span className="text-sm font-semibold">{rating}/5</span>
            <p className="text-xs">Rating</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 rounded-xl p-3 backdrop-blur-md">
            <SiTransmission className="h-6 w-6 mb-1 text-gray-400" />
            <span className="text-sm font-semibold">{transmission}</span>
            <p className="text-xs">Transmission</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 rounded-xl p-3 backdrop-blur-md">
            <BsFillFuelPumpFill className="h-6 w-6 mb-1 text-gray-400" />
            <span className="text-sm font-semibold">{fuelType}</span>
            <p className="text-xs">Fuel Type</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
          variants={fadeInUp}
        >
          <Link
            to="/cart"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-white to-gray-400 text-black font-semibold hover:from-black hover:to-gray-700 hover:text-white shadow-lg transition-all duration-300"
          >
            Add To Cart
          </Link>
          <Link
            to="/cars"
            className="px-6 py-3 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold transition-all duration-300"
          >
            Back to Cars
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CarDetails;
