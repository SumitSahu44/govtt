import React from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaTractor, FaFireExtinguisher, FaTint, FaTools, FaWarehouse, FaClipboardCheck, FaUser } from "react-icons/fa";
import rightArrowImage from "../../assets/Group27.png"; // Right yellow wavy arrow image

const services = [
  {
    name: "Manpower Deployment",
    description: "Providing skilled and unskilled workforce for various industries.",
    icon: <FaUser size={50} color="#f5911c" />,
  },
  {
    name: "Smart Agriculture & Drone Solutions",
    description: "Enhancing farming with precision agriculture and drone technology.",
    icon: <FaTractor size={50} color="#f5911c" />,
  },
  {
    name: "Fire Safety & Suppression",
    description: "Advanced fire detection, prevention, and suppression systems.",
    icon: <FaFireExtinguisher size={50} color="#f5911c" />,
  },
  {
    name: "Water Resource Management",
    description: "Sustainable water management solutions for conservation and efficiency.",
    icon: <FaTint size={50} color="#f5911c" />,
  },
  {
    name: "Architectural & Construction Services",
    description: "End-to-end architectural planning and construction execution.",
    icon: <FaHardHat size={50} color="#f5911c" />,
  },
  {
    name: "Interior & MEP Solutions",
    description: "Comprehensive interior design, mechanical, electrical, and plumbing services.",
    icon: <FaTools size={50} color="#f5911c" />,
  },
  {
    name: "Warehousing & Logistics",
    description: "Optimized storage, distribution, and supply chain solutions.",
    icon: <FaWarehouse size={50} color="#f5911c" />,
  },
  {
    name: "Consultancy & Certification",
    description: "Expert guidance on regulatory compliance, certifications, and audits.",
    icon: <FaClipboardCheck size={50} color="#f5911c" />,
  },
];

const TopServices = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="bg-[#FFFFF] py-16 px-4">
      {/* Top Section */}
      <motion.div
        className="relative max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5 },
          },
        }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#0d4837] mb-6 relative z-10"
          variants={fadeInUp}
        >
          Top-Services
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#0d4837] relative z-10 mx-4 md:mx-12 lg:mx-20 leading-relaxed"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          From consulting and strategy development to implementation and
          support, our comprehensive services can help your business thrive.
        </motion.p>

        {/* Left and Right Wavy Arrows */}
        <motion.div
          className="absolute left-0 top-8 md:top-6 lg:-left-20 z-0 hidden md:block"
          variants={floating}
        >
          <img
            src={rightArrowImage}
            alt="Left Wavy Arrow"
            className="w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 transform -scale-x-100"
          />
        </motion.div>
        <motion.div
          className="absolute right-0 top-8 md:top-6 lg:-right-20 z-0 hidden md:block"
          variants={floating}
        >
          <img
            src={rightArrowImage}
            alt="Right Wavy Arrow"
            className="w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80"
          />
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mt-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 pt-14 mb-10 relative text-center border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Icon */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md border border-yellow-500"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#0d4837] mb-6 mt-8">
              {service.name}
            </h3>

            {/* Description */}
            <p className="text-[#0d4837] text-sm md:text-base mb-8 leading-relaxed text-justify">
              {service.description}
            </p>

            {/* Button */}
            <motion.button
              className="bg-[#f5911c] text-white py-3 px-6 md:px-8 rounded-md hover:bg-[#e58719] transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
