import React from "react";
import { motion } from "framer-motion";
import birdImage from "../../assets/e.png"; // Crow image
import cityLineImage from "../../assets/d2.png"; // Cityline image
import workersImage from "../../assets/w2.png"; // Workers image
import badgeQuality from "../../assets/qb.png"; // Badge 1
import badgeAward from "../../assets/award.png"; // Badge 2
import badgeTrust from "../../assets/t1.png"; // Badge 3
import badgeExperience from "../../assets/30.png"; // Badge 4

const ServiceBanner = () => {
  return (
    <div className="bg-[#FFFF] w-full pt-[64px] lg:pt-[88px]"> {/* Added padding-top to account for navbar height */}
      <div className="max-w-full mx-auto  lg:mt-[-10px] py-0 px-0 relative">
        {/* Main Content */}
        <div className="py-8 px-6   bg-[#003333]  relative overflow-visible">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Section - Text */}
            <div className="lg:w-1/2 text-left text-center lg:text-left">
              <motion.h1
                className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
              >
                Explore Our <span className="capitalize">Top-Notch</span> Services
              </motion.h1>
              <motion.p
                className="text-base lg:text-lg text-white mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
              >
                From consulting and strategy development to implementation and
                support, our comprehensive services can help your business thrive.
              </motion.p>
              <motion.button
  className="bg-[#d0261a] text-white font-bold py-3 px-6 md:px-8 rounded-md text-lg mb-6 lg:mb-0 transition-all duration-300 ease-in-out relative z-20 hover:bg-[#a01e17] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#a01e17] focus:ring-opacity-50 pointer-events-auto"
  whileTap={{
    scale: 0.95, // Shrink on click
  }}
>
  Call Now
</motion.button>


              <div className="flex lg:hidden justify-center items-center space-x-4">
                <motion.img
                  src={birdImage}
                  alt="bird1"
                  className="w-16 h-16 max-w-full h-auto"
                  animate={{
                    y: ["-20px", "20px", "-20px"],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
                <motion.img
                  src={birdImage}
                  alt="bird2"
                  className="w-12 h-12 max-w-full h-auto"
                  animate={{
                    y: ["-15px", "15px", "-15px"],
                    transition: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 relative h-full flex justify-center items-end -bottom-[20px] overflow-hidden">
              <div className="relative h-full">
                <img
                  src={workersImage}
                  alt="Workers"
                  className="rounded-lg h-full object-cover lg:ml-10 max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-4 left-80 space-x-16 pointer-events-none">
            <motion.img
              src={birdImage}
              alt="bird1"
              className="w-24 h-24 max-w-full h-auto"
              animate={{
                y: ["-30px", "30px", "-30px"],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.img
              src={birdImage}
              alt="bird2"
              className="w-16 h-16 max-w-full h-auto"
              animate={{
                y: ["-20px", "20px", "-20px"],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          </div>

          <div className="absolute bottom-[0px] left-0 w-full z-10 flex">
            <img src={cityLineImage} alt="Cityline 1" className="w-1/2" />
            <img src={cityLineImage} alt="Cityline 2" className="w-1/2" />
          </div>
        </div>

        {/* Logo Badges */}
        <div className="flex justify-around items-center mt-16 flex-wrap gap-6">
          {[
            { src: badgeQuality, alt: "Best Quality" },
            { src: badgeAward, alt: "Best Award" },
            { src: badgeTrust, alt: "Trust" },
            { src: badgeExperience, alt: "30 Years Experience" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full flex items-center justify-center">
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="w-20 h-20 md:w-28 md:h-28"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
