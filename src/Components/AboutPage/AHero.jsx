import React, { useEffect, useState } from "react";
import bgImage from "../../assets/modi_drone.jpg"; // Use an Indian monument/cultural image
import "@fortawesome/fontawesome-free/css/all.min.css";

const AHero = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="about-section"
      className="relative w-full h-[300px] lg:h-[700px] mt-16 lg:mt-20 overflow-hidden"
    >
      <img
        src={bgImage}
        alt="Indian Culture"
        className="w-full h-full object-cover lg:object-center"
        style={{ display: "block" }}
      />

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-500/40 to-black-800/40"></div>

      {/* Content */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-8 transition-all duration-1000 ease-in-out ${
          isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
        style={{ maxWidth: "90%", width: "100%" }}
      >
        <p className="text-white text-base sm:text-xl text-justify md:text-2xl lg:text-3xl font-bold leading-relaxed tracking-wide mb-6 shadow-text">
          "Delivering excellence through skilled manpower and innovative technology, 
          contributing to India's growth since 1994. Our commitment to quality and 
          service has made us a trusted partner in nation-building."
        </p>
      </div>

      {/* Add custom styles for text shadow */}
      <style>
        {`
          .shadow-text {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </section>
  );
};

export default AHero;