import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-sm">Kapil Kumar</p>
            <p className="text-sm">Email: kapil.work.2002@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col max-md:hidden items-start fixed left-0 bg-orange-900 bottom-14 px-2 py-4 gap-4 ring-2 ring-orange-500 rounded-r-lg">
            <a
              href="https://www.linkedin.com/in/kapil-kumar-mathur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-105 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/KapilKumar2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-105 hover:text-orange-500 transition-colors duration-300"
            >
              <SiLeetcode size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kapil-kumar-mathur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-105 hover:text-green-500 transition-colors duration-300"
            >
              <SiGeeksforgeeks size={20} />
            </a>
            <a
              href="https://github.com/KapilKumar2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-105 hover:text-black transition-colors duration-300"
            >
              <FaGithub size={20} />
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
