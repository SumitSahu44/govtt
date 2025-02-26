import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-400 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="text-lg font-semibold text-white dark:text-gray-200 mb-4">
            Indian Labour Cooperative Society Ltd.
          </div>
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="font-semibold text-white dark:text-gray-200 mb-2">Programs</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition">Skill Development</a></li>
            <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition">Employment Assistance</a></li>
            <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition">Cooperative Training</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-white dark:text-gray-200 mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white dark:hover:text-gray-300 transition">About</a></li>
            <li><a href="/services" className="hover:text-white dark:hover:text-gray-300 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white dark:hover:text-gray-300 transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white dark:hover:text-gray-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-white dark:text-gray-200 mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition">Labour Rights</a></li>
            <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition">Government Policies</a></li>
            <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition">Cooperative Laws</a></li>
          </ul>
        </div>
      </div>

      
     
      {/* Copyright and Social Media */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Indian Labour Cooperative Society Ltd. All rights reserved.
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-white dark:hover:text-gray-300 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-white dark:hover:text-gray-300 transition">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-white dark:hover:text-gray-300 transition">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
