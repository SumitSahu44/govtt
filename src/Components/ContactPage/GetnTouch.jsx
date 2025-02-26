import React, { useEffect, useState } from "react";
import bgImage from "../../assets/cbg.jpeg"; // Import the background image
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

const ContactSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    // Observe the contact section
    const section = document.getElementById("contact-section");
    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section); // Cleanup observer
      }
    };
  }, []);

  return (
    <section
      id="contact-section"
      className="relative w-full h-[600px] bg-cover bg-center mt-12" // Added mt-12 to create space above
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glassy Shade */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>

      {/* "GET IN TOUCH" Section */}
      <div
        className={`absolute top-[25%] left-1/2 transform -translate-x-1/2 text-center px-4 md:px-8 transition-all duration-1000 ease-in-out ${
          isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
      >
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          GET IN TOUCH
        </h2>
        <p className="text-white text-semibold sm:text-base md:text-lg mt-4 font-medium">
          We'd love to hear from you! Whether you have questions about membership, our
          services, or how you can get involved, feel free to reach out.
        </p>
      </div>

      {/* Contact Details */}
      <div
        className={`absolute bottom-[-5rem] left-1/2 transform -translate-x-1/2 w-11/12 sm:w-4/5 lg:w-3/5 bg-white py-6 px-6 md:py-8 md:px-12 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 transition-all duration-1000 ease-in-out ${
          isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
        style={{ minHeight: "100px" }}
      >
        {/* Phone */}
        <div
          className={`flex items-center space-x-4 transition-all duration-1000 ease-in-out ${
            isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
        >
          <i className="fas fa-phone-alt text-orange-500 text-2xl md:text-3xl hover:text-orange-400 transition-all duration-300 ease-in-out transform hover:scale-110"></i>
          <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg hover:text-orange-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            011-47052007
          </p>
        </div>

        {/* Divider for Mobile */}
        <div className="block md:hidden w-full border-t-4 border-orange-500"></div>

        {/* Divider for Desktop */}
        <div className="hidden md:block h-20 border-l-4 border-orange-500"></div>

        {/* Email */}
        <div
          className={`flex items-center space-x-4 transition-all duration-1000 ease-in-out ${
            isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
        >
          <i className="fas fa-envelope text-orange-500 text-2xl md:text-3xl hover:text-orange-400 transition-all duration-300 ease-in-out transform hover:scale-110"></i>
          <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg hover:text-orange-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            support@ilcs.oc.in
          </p>
        </div>

        {/* Divider for Mobile */}
        <div className="block md:hidden w-full border-t-4 border-orange-500"></div>

        {/* Divider for Desktop */}
        <div className="hidden md:block h-20 border-l-4 border-orange-500"></div>

        {/* Address */}
        <div
          className={`flex items-center space-x-4 text-center transition-all duration-1000 ease-in-out ${
            isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
        >
          <i className="fas fa-map-marker-alt text-orange-500 text-2xl md:text-3xl hover:text-orange-400 transition-all duration-300 ease-in-out transform hover:scale-110"></i>
          <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg hover:text-orange-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            14-D, Atma Ram House - 110001 <br /> (India)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
