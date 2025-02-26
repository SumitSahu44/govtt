// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Home/Nav';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from '../Home/Footer';
import Projects from './Project';
import GoalSection from './Goal';
import ProjectGrid from './Grid';
const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />      
      <Projects/>
      <GoalSection/>
      <ProjectGrid/>
      <Footer/>
    </div>
  );
};

export default ProjectsPage;
