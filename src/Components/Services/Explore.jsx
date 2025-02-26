import React from "react";
import { motion } from "framer-motion";
import Map from "../../assets/map2.png";

const ExploreWorld = () => {
  return (
    <div className="bg-[#FF] py-16 px-4 flex justify-center items-center">
  <div className="bg-[#d24236] text-white rounded-lg w-full max-w-8xl px-4 py-10 md:px-12 md:py-14 relative overflow-hidden">
    {/* Content */}
    <motion.div
      className="md:flex md:justify-between md:items-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      {/* Text Section */}
      <div className="mb-6 md:mb-0">
        <motion.h2
          className="text-2xl md:text-4xl font-bold leading-tight mb-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Let’s Ready to Explore The <br className="hidden md:block" />
          World With Us.
        </motion.h2>
      </div>

      {/* Button */}
      <motion.button
        className="bg-white text-[#d24236] text-sm md:text-base font-semibold py-2 px-6 md:px-8 rounded-md hover:bg-gray-200 transition shadow-lg"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Contact Us
      </motion.button>
    </motion.div>

    {/* Background World Map */}
    <motion.div
      className="absolute inset-0 opacity-10 md:opacity-20"
      whileInView={{ scale: 1, opacity: 0.2 }}
      initial={{ scale: 1.2, opacity: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <img
        src={Map}
        alt="World Map"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</div>

  
  );
};

export default ExploreWorld;
