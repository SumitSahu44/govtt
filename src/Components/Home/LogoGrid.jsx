import React from "react";
import bharat from "../../assets/bharat.jpeg";
import exp from "../../assets/30.png";
import msme from "../../assets/msme-logo.png";
import g20 from "../../assets/G20.png";
import zed from "../../assets/zed-logo.png";
import mca from "../../assets/mca.svg";
import qci from "../../assets/Qci.png";
import sr from "../../assets/m.webp";
import iffco from "../../assets/iffco.png";
import kribhco from "../../assets/kribhco.png";
import NFL from "../../assets/NFL.png";
import './LogoGrid.css'
const logos = [bharat, mca, iffco, msme, kribhco, NFL, zed, qci, g20, exp, sr];

const LogoGrid = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Static Grid for Large Screens */}
      <div className="hidden sm:grid grid-cols-6 gap-6 items-center justify-center">
        {logos.slice(0, 6).map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          </div>
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-5  gap-6 items-center justify-center mt-6">
        {logos.slice(6, 11).map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Logo ${index + 7}`} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          </div>
        ))}
      </div>

     {/* For small screens - Infinite Scrolling Carousel */}
     <div className="sm:hidden overflow-hidden relative w-full mt-6">
        <div className="flex space-x-8 animate-scroll">
          {logos.concat(logos).map((logo, index) => ( // Duplicate logos for smooth infinite scrolling
            <div key={index} className="flex-shrink-0">
              <img src={logo} alt={`Logo ${index + 1}`} className="w-24 h-24 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
