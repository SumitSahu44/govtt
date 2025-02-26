import React, { useEffect, useState } from "react";
import map from "../../assets/map2.jpeg";

const SendSection = () => {
  const [isMapInView, setIsMapInView] = useState(false);
  const [isFormInView, setIsFormInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px for mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Intersection Observer for Map
    const mapObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapInView(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.5, // Trigger animation when 10% is visible on mobile, 50% on larger screens
      }
    );

    // Intersection Observer for Form
    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormInView(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.5,
      }
    );

    // Observe the map and form sections
    const mapSection = document.getElementById("map-section");
    const formSection = document.getElementById("form-section");

    if (mapSection) mapObserver.observe(mapSection);
    if (formSection) formObserver.observe(formSection);

    return () => {
      if (mapSection) mapObserver.unobserve(mapSection);
      if (formSection) formObserver.unobserve(formSection);
    };
  }, [isMobile]);

  return (
    <section className="relative bg-white py-12 lg:py-24 flex justify-center items-center top-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16">
        
        {/* Map Section */}
        <div
          id="map-section"
          className={`relative w-full lg:w-1/2 flex justify-center transition-all duration-1000 ease-in-out ${
            isMapInView ? "opacity-100 transform scale-105" : "opacity-0 scale-95"
          }`}
        >
          {/* Background Shape - Extended Top & Bottom */}
          <div className="absolute -left-6 -top-10 w-11/12 h-[110%] bg-[#1A3D5D] rounded-bl-[50px] rounded-tl-[50px] hidden lg:block"></div>

          {/* Map Image - Same Height as Form */}
          <div className="relative w-full lg:w-[90%] h-auto lg:h-full rounded-2xl overflow-hidden shadow-lg z-10">
            <img src={map} alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Form Section */}
        <div
          id="form-section"
          className={`w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-8 lg:p-12 mt-8 lg:mt-0 relative z-20 transition-all duration-1000 ease-in-out ${
            isFormInView ? "opacity-100 transform translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form>
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                placeholder="Your Email"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* How Did You Find Us */}
            <div className="mb-6">
              <label
                htmlFor="find-us"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                How did you find us?
              </label>
              <select
                id="find-us"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
              >
                <option>Google</option>
                <option>Friends/Family</option>
                <option>Social Media</option>
                <option>Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendSection;
