import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-purple-600 py-10 flex flex-col items-center ">
      <div className="flex space-x-6 mb-6">
        <a href="#" className="text-white hover:text-gray-400 text-2xl">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-white hover:text-gray-400 text-2xl">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="text-white">&copy; 2025 Eventify. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer
