"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import bharat from "../../assets/bharat.jpeg"
import exp from "../../assets/30.png"
import msme from "../../assets/msme-logo.png"
import g20 from "../../assets/G20.png"
import zed from "../../assets/zed-logo.png"
import mca from "../../assets/mca.svg"
import qci from "../../assets/Qci.png"
import sr from "../../assets/m.webp"

// ...existing code...

const LogoSection = () => {
  const [isGovHovered, setIsGovHovered] = useState(false)
  const [isPrivateHovered, setIsPrivateHovered] = useState(false)

  // Separate government and private logos
  const governmentLogos = [mca, sr, msme, g20, bharat]
  const privateLogos = [exp, zed, qci]

  // Duplicate logos more times to ensure seamless loop
  const duplicatedGovLogos = [...governmentLogos, ...governmentLogos, ...governmentLogos, ...governmentLogos]
  const duplicatedPrivateLogos = [...privateLogos, ...privateLogos, ...privateLogos, ...privateLogos]

  return (
    <div className="bg-white py-6 sm:py-8 mt-[15px] mb-12">
      <div className="container mx-auto px-4">
        {/* Government Logos Section - Right to Left */}
        <div className="relative h-[100px] mb-16 overflow-hidden">
          <motion.div
            className="flex absolute gap-8 items-center"
            animate={{
              x: [0, '-50%']
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              pause: isGovHovered,
            }}
            onMouseEnter={() => setIsGovHovered(true)}
            onMouseLeave={() => setIsGovHovered(false)}
            style={{ width: "fit-content" }}
          >
            {duplicatedGovLogos.map((logo, index) => (
              <div key={`gov-${index}`} className="flex-shrink-0 w-[200px] flex justify-center items-center">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`Government Logo ${index + 1}`}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Private Logos Section - Left to Right */}
        <div className="relative h-[100px] overflow-hidden">
          <motion.div
            className="flex absolute gap-4 items-center"
            animate={{
              x: ['-50%', 0]
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
              pause: isPrivateHovered,
            }}
            onMouseEnter={() => setIsPrivateHovered(true)}
            onMouseLeave={() => setIsPrivateHovered(false)}
            style={{ width: "fit-content" }}
          >
            {duplicatedPrivateLogos.map((logo, index) => (
              <div key={`private-${index}`} className="flex-shrink-0 w-[150px] flex justify-center items-center">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`Private Logo ${index + 1}`}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoSection

