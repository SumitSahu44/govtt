import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import story1 from "../../assets/farmer-handshake.jpg";
import story2 from "../../assets/story2-img.avif";
import arrow from "../../assets/arrow.png";

export function Story() {
  const stats = [
    { value: 30, label: "Experience", suffix: "K+" },
    { value: 50, label: "Projects", suffix: "K+" },
    { value: 45, label: "WorldWide", suffix: "+" },
    { value: 30, label: "Ongoing", suffix: "+" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Counter = ({ start, end, duration, suffix, inView }) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
      if (inView) {
        let startTimestamp;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
          setValue(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, [inView, start, end, duration]);

    return (
      <div className="flex items-baseline space-x-1">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          {value.toLocaleString()}
        </span>
        <span className="text-base sm:text-base md:text-lg lg:text-3xl font-bold text-black">
          {suffix}
        </span>
      </div>
    );
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Section */}
          <motion.div className="relative space-y-10" variants={fadeIn}>
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 w-20 h-full border-l-8 border-orange-500 rounded-full"></div>

            {/* Our Story Heading */}
            <div className="pl-8">
              <h4 className="text-lg font-bold text-black tracking-widest flex items-center">
                <span>Our Story</span>
                <motion.img
                  src={arrow}
                  alt="Arrow"
                  className="mt-8 text-orange-600 w-12 h-12 ml-2 transform"
                  initial={{ rotate: -90, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </h4>
              <h2 className="text-6xl md:text-6xl font-bold font-baloo text-black mt-4 bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 text-transparent">
                Indian Labour Cooperative Society Ltd
              </h2>
            </div>

            <motion.p
              className="pl-8 text-lg text-justify text-gray-700 leading-relaxed font-baloo"
              variants={fadeIn}
              
            >
              Indian Labour Cooperative Society Ltd. is an organization dedicated to the empowerment and welfare
              of workforce across India. Established in 1994 with the vision of fostering economic and social
              growth for the labor community, our cooperative society operates on the principles of mutual aid,
              self-help, and collective responsibility.
            </motion.p>

            {/* Stats Section with Counter */}
            <motion.div
              className="pl-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {stats.map((stat, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });

                return (
                  <motion.div
                    key={index}
                    className="text-center p-2 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
                    variants={fadeIn}
                    ref={ref}
                  >
                    <Counter
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-1 text-center">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Images Section with Sequential Animation */}
          <motion.div
            className="flex flex-col justify-end items-end gap-8 sm:flex-col sm:items-end sm:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.img
              src={story1}
              alt="Workers in factory"
              className="w-full sm:w-[90%] h-72 sm:h-80 object-cover object-top rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            />

            <motion.img
              src={story2}
              alt="Workers in field"
              className="w-full sm:w-[90%] h-72 sm:h-80 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}