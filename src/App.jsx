import React from "react";
import Navbar from "./Components/Home/Nav";
import Hero from "./Components/Home/Hero";
import { Story } from "./Components/Home/Story";
import { Certification } from "./Components/Home/Certification";
import LatestNews from "./Components/Home/News";
import Footer from "./Components/Home/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import ServicePage from "./Components/Services/ServicePage";
import SahkarBanner from "./Components/Home/Banner";
import ContactPage from "./Components/ContactPage/Contact";
import AboutPage from "./Components/AboutPage/AboutContent";
import ProjectsPage from "./Components/Projects/Page";
import LogoSection from "./Components/Home/Logo";
import NewsSection from "./Components/NewsPage/NewsSection";
import "@fontsource/baloo-2";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={
        <div>
      <Navbar />
      <main>
        <Hero />
        <SahkarBanner/>
        <LogoSection/>
        <Story />
        <Certification/>
        <LatestNews/>
        <Footer/>
      </main>
    </div>
      }/>
               <Route path="/service" element={<ServicePage />} />
               <Route path="/contact" element={<ContactPage />} />
               <Route path="/about" element={<AboutPage />} />
              <Route path="/partners" element={<ProjectsPage/>}/>
              <Route path="/news" element={<NewsSection/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
