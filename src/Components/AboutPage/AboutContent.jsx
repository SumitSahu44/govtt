// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Home/Nav';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from '../Home/Footer';
import AHero from './AHero';
// import Banner from './Abanner';
import AboutUs from './About';
import TestimonialsCarousel from './Client';
import MissionVision from './AMission';
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />      
      <AHero/>
      {/* <Banner/> */}
      <AboutUs/>
      <MissionVision/>
      <TestimonialsCarousel/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
