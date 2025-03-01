import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import zed from "../../assets/zed.png";
import { RxMargin } from "react-icons/rx";

export function Certification() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Curved Bottom Shape */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-r from-green-500 to-green-700 rounded-t-[40%] z-[-1]" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Section with Enhanced Styling */}
          <motion.div
            // className="w-full rounded-lg overflow-hidden relative  hover:scale-105 transition-transform duration-300"
            variants={fadeInLeft}
          >
            <img
              src={zed}
              alt="ZED MSME Certification"
              className="w-[80%] h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
            {/* Image Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg" /> */}
          </motion.div>

          {/* Text Section with Enhanced Typography and Spacing */}
          <motion.div className="space-y-8" variants={fadeInRight}>
            <h2 className="text-4xl font-semibold text-justify text-gray-900 tracking-tight leading-tight">
              ZED Certification for MSMEs: A Step Towards Excellence
            </h2>
            <p className="text-lg text-justify text-gray-600 md:text-xl">
              The ZED Certification, in collaboration with ILCS, MSME, and QCI, is designed to help MSMEs excel in quality and sustainability practices. Enroll today to adopt world-class standards and gain the recognition you deserve.
            </p>

            <motion.div
              className="flex justify-center mt-8"
              variants={fadeInRight}
            >
              <button
                onClick={handleEnrollClick}
                className="px-12 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                Enroll Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Top Shape */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-l from-green-500 to-green-700 rounded-b-[40%] z-[-1]" />
    </div>
  );
}
