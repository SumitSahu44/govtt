import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/drone.png";

const SahkarBanner = () => {
  return (
    <div className="w-full mb-20 bg-white">
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-600 text-center p-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        सहकार से समृद्धि
      </motion.h1>

      <motion.img
        src={banner}
        alt="Drone"
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  );
};

export default SahkarBanner;
