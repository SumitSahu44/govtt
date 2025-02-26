// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Home/Nav';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from '../Home/Footer';
import TopServices from './TopServices';
import ServiceBanner from './SHero';
import ExploreWorld from './Explore';
const ServicePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />      
      <ServiceBanner/>
      <TopServices/>
      <ExploreWorld/>
      <Footer/>
    </div>
  );
};

export default ServicePage;
