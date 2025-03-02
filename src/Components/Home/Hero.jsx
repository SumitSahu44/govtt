import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import pic2 from "../../assets/hero-bg-2.jpeg";
import pic5 from "../../assets/hero-bg-3.jpeg";
import pic7 from "../../assets/hero-bg-4.jpeg";
import plane from "../../assets/hero-bg-5.jpeg";
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
              <div className="relative w-full h-ful">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full sm:rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Thumbnail Navigation */}
  
<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-lg sm:max-w-2xl px-4">
  <div className="flex justify-center space-x-2">
    {images.map((_, index) => (
      <div
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
          index === currentIndex ? "bg-yellow-400 scale-110" : "bg-gray-400 opacity-60"
        }`}
      ></div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Hero;
