import React, { use } from "react";
import bannerImg from "../assets/banner.jpg";
import { Link, useLoaderData } from "react-router";
import TypewriterView from "../components/common/TypewriterView";
import { motion } from "framer-motion";
import Car from "../components/common/Car";
import HowItWorks from "../components/uncommon/HowItWorks";
import TopProviders from "../components/uncommon/TopProviders";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Testimonial from "../components/uncommon/Testimonial";

const Home = () => {
  const cars = useLoaderData();
  const { user } = use(AuthContext);
  // Animation variants
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
    <section>
      <div
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
              initial="hidden"
              animate="visible"
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
              className="mt-4 flex justify-center gap-2 sm:gap-4"
              variants={itemVariants}
            >
              {user ? (
                <Link
                  to={`/cars`}
                  className="inline-block rounded border border-gray-400 bg-white px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium text-black shadow-sm transition-colors hover:bg-black hover:text-white"
                >
                  Browse Cars
                </Link>
              ) : (
                <Link
                  to={`auth/login`}
                  className="inline-block rounded border border-gray-400 bg-white px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium text-black shadow-sm transition-colors hover:bg-black hover:text-white"
                >
                  Get Started
                </Link>
              )}

              <Link
                className="inline-block rounded border border-gray-200 px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                to={`/about`}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div>
        <motion.h3 className="text-4xl font-bold my-15 text-center">
          Popular Cars
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-5 mb-10">
          {cars.slice(0, 5).map((car) => (
            <motion.div
              className="px-4 lg:px-0"
              key={car.id}
              variants={cardVariants}
            >
              <Car car={car} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex justify-center my-8">
          <Link className="btn bg-black rounded-none text-white" to={`/cars`}>
            Show All
          </Link>
        </motion.div>
      </motion.div>
      <TopProviders />
      <HowItWorks />
      <Testimonial />
    </section>
  );
};

export default Home;
