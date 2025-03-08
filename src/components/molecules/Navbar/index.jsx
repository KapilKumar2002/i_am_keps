import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="navbar"
      className="text-white bg-gray-800 p-4 fixed w-full top-0 z-10 shadow-lg mb-20"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-gray-400">
            Keps
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#education" className="hover:text-gray-400">
            Education
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <a href="#about" className="block py-2 hover:text-gray-400">
            About Me
          </a>
          <a href="#experience" className="block py-2 hover:text-gray-400">
            Experience
          </a>
          <a href="#projects" className="block py-2 hover:text-gray-400">
            Projects
          </a>
          <a href="#education" className="block py-2 hover:text-gray-400">
            Education
          </a>
          <a href="#skills" className="block py-2 hover:text-gray-400">
            Skills
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
