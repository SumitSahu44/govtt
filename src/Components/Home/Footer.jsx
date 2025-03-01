import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">INFO</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Formats</li>
            <li>Compression</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Developer API</li>
            <li>Tools</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
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
