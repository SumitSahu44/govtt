import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import pic2 from "../../assets/drone-1.jpg";
import pic5 from "../../assets/drone-2.jpg";
import pic7 from "../../assets/drone-over-farm.png";
import plane from "../../assets/seaplane.jpg";
import bannerImage from "../../assets/sahkaar_se.jpeg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef(null);
  
  const images = [bannerImage, pic2, pic5, pic7, plane];
  const extendedImages = [...images, images[0]]; // Looping effect

  const normalInterval = 3000;
  const transitionInterval = 700;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === extendedImages.length - 2) {
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex === extendedImages.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length);
      }
    }, currentIndex === extendedImages.length - 1 ? transitionInterval : normalInterval);

    return () => clearInterval(interval);
  }, [currentIndex, extendedImages.length]);

  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: currentIndex === 0 ? "auto" : "smooth",
      });
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative mt-[100px] sm:mt-[100px] md:mt-[80px] overflow-hidden lg:mb-16">
      {/* Slideshow */}
      <motion.div
        className="w-full h-[30vh] sm:h-[60vh] md:h-[80vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          ref={slideshowRef}
          className="flex w-screen h-full overflow-x-hidden"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {extendedImages.map((image, index) => (
            <motion.div
              key={index}
              className="flex-none w-full h-full"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-lg sm:max-w-2xl px-4">
        <div className="hidden sm:flex space-x-4 justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="relative cursor-pointer transition-all transform hover:scale-110"
            >
              <div className={`absolute inset-0 rounded-md transition-all duration-300 ${
                index === currentIndex ? "border-4 border-yellow-400" : "border-2 border-transparent"
              }`}></div>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-24 h-24 sm:w-14 sm:h-14 object-cover rounded-md transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex sm:hidden justify-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? "bg-[#FF9933]" : "bg-[#FFC300]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
