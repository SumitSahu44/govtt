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
import NFI from "../../assets/NFI.png";

const logos = [
  zed,
  qci,
  g20,
  exp,
  sr,
  bharat,
  msme,
  mca,
  iffco,
  kribhco,
  NFI,
];

const LogoGrid = () => {
  return (
    <div className="container mx-auto p-4">
      {/* First row - 6 images on medium/large screens, 4 on small screens */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center">
        {logos.slice(0, 6).map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          </div>
        ))}
      </div>
      {/* Second row - 5 images on medium/large screens, 4 on small screens */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 items-center justify-center mt-6">
        {logos.slice(6, 11).map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Logo ${index + 7}`} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default LogoGrid;
