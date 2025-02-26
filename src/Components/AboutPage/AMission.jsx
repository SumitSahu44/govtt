
import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Eye } from "lucide-react"
import missionImage from "../../assets/mission.jpeg"; 
import visionImage from "../../assets/vision.jpeg";   

const MissionVision = () => {
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [visionRef, visionInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const missionControls = useAnimation()
  const visionControls = useAnimation()

  useEffect(() => {
    if (missionInView) {
      missionControls.start("visible")
    }
    if (visionInView) {
      visionControls.start("visible")
    }
  }, [missionInView, visionInView, missionControls, visionControls])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={missionRef}
          initial="hidden"
          animate={missionControls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
        >
          <motion.div className="lg:w-1/2" variants={imageVariants}>
            <img
              src={missionImage}
              alt="Mission"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <Target className="text-orange-500" size={36} />
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower the labor force by providing quality-based services, 
            skill development, and sustainable employment across various sectors. Through modern 
            technology, innovative solutions, and cooperative values, we aim to enhance workforce safety, 
            productivity, and socio-economic growth, contributing to the nation’s development.
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            >
              Learn More
            </motion.button> */}
          </div>
        </motion.div>

        <motion.div
          ref={visionRef}
          initial="hidden"
          animate={visionControls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
        >
          <motion.div className="lg:w-1/2" variants={imageVariants}>
            <img
              src={visionImage}
              alt="Vision"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <Eye className="text-orange-500" size={36} />
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to uplift and strengthen India’s labor community by fostering sustainable 
              employment, technological advancements, and industrial collaborations. We strive to create 
              a self-reliant and inclusive workforce, driving socio-economic progress in alignment with 
              Aatma Nirbhar Bharat.
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            >
              Discover More
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MissionVision

