import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-sm">Kapil Kumar</p>
            <p className="text-sm">Email: kapil.kumar@example.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/kapil-kumar-mathur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/kapilkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/kapilkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:kapil.kumar@example.com"
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Brief Description */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} Kapil Kumar. All rights reserved.
            </p>
            <p className="text-xs">
              Passionate Software Developer specializing in Full-Stack
              Development and Backend Engineering.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 text-center bg-gray-950/50">
        <p className="text-xs text-gray-400">
          Designed and Developed by Kapil Kumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
