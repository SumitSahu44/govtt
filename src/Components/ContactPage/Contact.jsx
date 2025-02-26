// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Home/Nav';
import Footer from '../Home/Footer';
import { useNavigate } from "react-router-dom"; 
import ContactSection from './GetnTouch';
import SendSection from './Send';

const ContactPage = () => {
  const navigate = useNavigate();

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px', // Adjust margin as needed
  };

  const sectionStyle = {
    width: '100%',
    padding: '20px', // Adds space inside each section
  };

  return (
    <div>
      <Navbar />
        <ContactSection />
      <div style={pageStyle}>
        <SendSection />
      </div>
      <Footer />
      </div>
  );
};

export default ContactPage;
