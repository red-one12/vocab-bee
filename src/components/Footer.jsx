// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white max-w-7xl m-auto py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: vocabBee@gmail.com</p>
            <p>Phone: 01703344405</p>
            <p>Address: Birulia, Savar, Dhaka</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>&copy; 2024 VocabBee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
