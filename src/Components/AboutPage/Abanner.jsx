import React from "react";
import bannerImage from "../../assets/ban.jpeg"; // Import the banner image

const Banner = () => {
  return (
    <section className="w-full my-10 sm:my-4 flex justify-center overflow-hidden">
      {/* Image Container */}
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-[auto] sm:h-[600px] object-contain sm:object-cover transition-all duration-1000 ease-in-out"
      />
    </section>
  );
};

export default Banner;
