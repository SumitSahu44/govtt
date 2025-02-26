import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import targetImage from "../../assets/target.png"; // Import the image

export function MissionVision() {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        {/* Wrapper for both cards */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card - Comes from Left */}
          <motion.div
            className="relative bg-yellow-500 text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-start justify-center h-[450px] sm:h-[500px] w-full sm:w-[300px] md:w-[350px] lg:w-[450px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            variants={cardVariantsLeft}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.img
              src={targetImage}
              alt="Target"
              className="absolute top-[-10px] sm:top-[-20px] right-[-10px] sm:right-[-20px] w-24 sm:w-40 md:w-36 h-24 sm:h-40 md:h-36 object-contain" // Increased size for mobile view
              variants={imgVariants}
            />
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-8 sm:mt-6">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 sm:mt-6">
              The Indian Labour Cooperative Society Ltd. aims to provide a
              collective voice to workers, ensuring they receive fair treatment
              and opportunities for growth. We believe in the power of unity
              and cooperation to bring about positive change in the labor
              sector.
            </p>
          </motion.div>

          {/* Vision Card - Comes from Right */}
          <motion.div
            className="relative bg-green-500 text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-start justify-center h-[450px] sm:h-[500px] w-full sm:w-[300px] md:w-[350px] lg:w-[450px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            variants={cardVariantsRight}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.img
              src={targetImage}
              alt="Target"
              className="absolute top-[-10px] sm:top-[-20px] right-[-10px] sm:right-[-20px] w-24 sm:w-40 md:w-36 h-24 sm:h-40 md:h-36 object-contain" // Increased size for mobile view
              variants={imgVariants}
            />
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-8 sm:mt-6">
              Our Vision
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 sm:mt-6">
              The Indian Labour Cooperative Society Ltd. envisions a labor
              ecosystem that fosters equality, dignity, and economic security.
              Through collective efforts, we aim to create a brighter and more
              sustainable future for workers in India.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
