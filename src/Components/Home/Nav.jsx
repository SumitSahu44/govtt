import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import azadi from "../../assets/75azadi.png";
import excellence from "../../assets/30.png";

const Navbar = ({ currentImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-lg shadow-md border-b border-gray-300 py-[8px] dark:bg-gray-900 dark:border-gray-700"
      style={{ backgroundImage: `url(${currentImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <nav className="container mx-auto py-[8px] px-[20px] flex items-center justify-between max-w-screen-xl">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" width={50} height={12} className="ml-2" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-evenly w-full max-w-lg text-md font-baloo text-gray-800 dark:text-gray-200">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Partners", path: "/partners" },
            { name: "Service", path: "/service" },
            { name: "News", path: "/news" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name} className="relative group font-baloo font-semibold">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-1 transition-all duration-300 ${
                    isActive ? "text-blue-700 font-bold dark:text-blue-300" : "hover:text-blue-700 dark:hover:text-blue-300"
                  }`
                }
              >
                <span>{item.name}</span>
              </NavLink>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="flex space-x-1">
          <img src={azadi} alt="Azadi Logo" className="h-8" />
          {/* <img src={excellence} alt="Excellence Logo" className="h-8" /> */}
        </div>

        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-12 left-0 right-0 bg-white dark:bg-gray-800 shadow-md px-4 py-2 transform transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="space-y-2 text-md font-semibold text-gray-800 dark:text-gray-200">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Partners", path: "/partners" },
            { name: "Service", path: "/service" },
            { name: "News", path: "/news" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-1 transition-all duration-300 ${
                    isActive ? "text-blue-700 font-bold dark:text-blue-300" : "hover:text-blue-700 dark:hover:text-blue-300"
                  }`
                }
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
