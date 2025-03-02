import React, { useState } from "react";
import { motion } from "framer-motion";
import projectImage from "../../assets/our-partner.avif";
import { ArrowRight, BookOpen, Info } from "lucide-react"; // Import icons

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="relative max-w-6xl mt-[64px] sm:mt-[90px] md:mt-[120px] mx-auto p-6 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-3xl -z-10" />

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div className="md:w-1/2 space-y-8" variants={itemVariants}>
          {/* Title with decorated background */}
          <div className="relative">
            <motion.h2 
              className="text-5xl font-bold text-gray-900 relative z-10"
              animate={{ y: [10, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              Our Partners
              <div className="absolute -bottom-2 left-0 w-24 h-2 bg-orange-500/30 rounded-full" />
            </motion.h2>
          </div>

          {/* Description with improved typography */}
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed text-justify"
            variants={itemVariants}
          >
            Under the able guidance of our Board, the Indian Labour Cooperative Society (ILCS), established in 1994, 
            has successfully built a robust ecosystem for skilled manpower and modern services, including cutting-edge 
            drone technology. This strategic approach has enhanced efficiency and innovation across key government 
            sectors, benefiting both ILCS and Indian farmers, especially in areas like agriculture and infrastructure. 
            Our commitment to quality ensures the successful execution of projects, driving progress and delivering 
            impactful results.
          </motion.p>

          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-3 gap-4 py-6"
            variants={itemVariants}
          >
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Projects Done" },
              { number: "50+", label: "Active Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Buttons with improved styling and icons */}
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#c2410c" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              Become Our Partner
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fff1e6" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-orange-500 text-gray-900 px-6 py-3 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              <Info className="w-5 h-5" />
              Learn More
            </motion.button> */}
          </motion.div>
        </motion.div>

        {/* Right Image with enhanced animations */}
        <motion.div
          className="md:w-1/2"
          variants={itemVariants}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.img
              src={projectImage}
              alt="Team working"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;