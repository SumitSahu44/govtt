import React from "react";
import { motion } from "framer-motion";
import partner1 from "../../assets/p1.jpg";
import partner2 from "../../assets/p2.jpg";
import partner3 from "../../assets/p3.jpg";
import partner4 from "../../assets/p4.jpg";
import partner5 from "../../assets/p5.jpg";
import partner6 from "../../assets/p6.jpg";
import partner7 from "../../assets/p7.jpg";
import partner8 from "../../assets/p8.jpg";
import partner9 from "../../assets/p9.jpg";
import partner10 from "../../assets/p10.jpg";
import partner11 from "../../assets/iffco.png";
import partner12 from "../../assets/kribhco.png";
import partner13 from "../../assets/NFI.png";
import partner14 from "../../assets/RCF.png";
import partner15 from "../../assets/NCUI.jpg";

const partners = [
  {
    id: 1,
    logo: partner1,
    name: "HYDROGEN DRONE OEM"
  },
  {
    id: 2,
    logo: partner2,
    name: "HYDROGEN FUEL CELL OEM"
  },
  {
    id: 3,
    logo: partner3,
    name: "BELGIUM DRONE THINK TANK"
  },
  {
    id: 4,
    logo: partner4,
    name: "GOVERNMENT OF ASSAM - RPTO"
  },
  {
    id: 5,
    logo: partner5,
    name: "EUROPEAN UNION DRONE INITIATIVE"
  },
  {
    id: 6,
    logo: partner6,
    name: "AFRICAN VERTICAL FARMING"
  },
  {
    id: 7,
    logo: partner7,
    name: "HARYANA – RPTO"
  },
  {
    id: 8,
    logo: partner8,
    name: "INDIAN DRONE OEM"
  },
  {
    id: 9,
    logo: partner9,
    name: "UAE VERTICAL FARMING"
  },
  {
    id: 10,
    logo: partner10,
    name: "EUROPE DRONE PORT"
  },

  {
    id: 11,
    logo: partner11,
    name: "IFFCO"
  },
  {
    id: 12,
    logo: partner12,
    name: "Kribhco"
  },
  {
    id: 13,
    logo: partner13,
    name: "NFI"
  },
  {
    id: 14,
    logo: partner14,
    name: "RCF"
  },
  {
    id: 15,
    logo: partner15,
    name: "NCUI"
  }
];

const ProjectGrid = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-gray-50 to-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Trusted Partners</h1>
          <p className="text-xl text-gray-600">Collaborating with industry leaders to drive innovation</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="group relative h-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-square rounded-lg overflow-hidden mb-2 sm:mb-4 flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain transform group-hover:scale-90 transition-transform duration-300"
                  />
                </div>
                <div className="text-center flex-grow flex items-center justify-center px-1 sm:px-2">
                  <h3 className="text-[11px] leading-tight sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
