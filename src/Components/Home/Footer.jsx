import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram,  } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";

import { MdEmail } from "react-icons/md";

import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
               <NavLink to={'/'} >
                <span>Home</span>
              </NavLink>
            </li>

            <li>
               <NavLink to={'/about'} >
                <span>About</span>
              </NavLink>
            </li>

            <li>
               <NavLink to={'/partners'} >
                <span>Partner</span>
              </NavLink>
            </li>

            <li>
               <NavLink to={'/service'} >
                <span>Service</span>
              </NavLink>
            </li>

            <li>
               <NavLink to={'/news'} >
                <span>News</span>
              </NavLink>
            </li>

          

      
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li><IoCall className="inline text-xl mr-1"/>011-47052007</li>
            <li><MdEmail  className="inline text-xl mr-1"/>support@ilcs.co.in</li>
          
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <ul className="space-y-2 text-gray-300">
            <li><IoLocation  className="inline text-xl mr-1"/>14-D, Atma Ram House - 110001  <br />
            (India)</li>
          
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 ">Subscribe to our email newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-md text-black bg-transparent border"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md">SUBSCRIBE</button>
          </div>

          <h3 className="text-lg font-semibold mt-5">Follow us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-white text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-white text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
