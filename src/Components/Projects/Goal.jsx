import React from "react";
import { motion } from "framer-motion";
import goalImage from "../../assets/bg12.jpeg";
import { ArrowRight, Target, Users, Award, Briefcase } from 'lucide-react';

const GoalSection = () => {
  return (
    <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto p-3 sm:p-6">
      <motion.div
        className="relative bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image and Overlay */}
        <img
          src={goalImage}
          alt="Goal Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-transparent" />

        {/* Main Content */}
        <div className="relative p-5 sm:p-8 md:p-14 text-center flex flex-col items-center max-w-5xl mx-auto">
          {/* Title Section */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
              Our Goal
            </h2>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-poppins">
              <span className="font-bold text-orange-500">The vision</span> of the Indian
              Labour Cooperative Society Ltd. (ILCS) is to empower and uplift the
              labor community across India through sustainable and equitable
              development.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-poppins">
              Our aim is to foster a cooperative environment where laborers can achieve 
              their full potential, secure their rights, and improve their socio-economic status.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, staggerChildren: 0.2 }}
          >
            {[
              { icon: Users, number: "10K+", label: "Active Members" },
              { icon: Briefcase, number: "25+", label: "Years of Service" },
              { icon: Award, number: "100+", label: "Projects Completed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mb-2 sm:mb-3" />
                <span className="text-2xl sm:text-3xl font-bold text-orange-500">{stat.number}</span>
                <span className="text-xs sm:text-sm uppercase tracking-wider mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold font-poppins hover:bg-orange-600 transition shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="flex items-center gap-2 border-2 border-orange-500 text-white px-8 py-3 rounded-lg font-semibold font-poppins hover:bg-orange-500/20 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default GoalSection;