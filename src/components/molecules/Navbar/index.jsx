import React, { useState } from "react";
import navTabs from "../../../data/navTabs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar"
      className="text-white bg-gray-800 p-4 fixed w-full top-0 z-20 shadow-lg mb-20"
    >
      <div className="container mx-auto flex max-md:flex-col max-md:gap-10 max-md:items-start justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-gray-400">
            Keps
          </a>
        </div>
        <div
          className={`flex max-md:flex-col  max-md: md:space-x-4 max-md:bg-gray-800  max-md:absolute max-md:w-full left-0  duration-1000  ${
            isOpen ? "p-4  top-16 gap-2" : "-top-96"
          }`}
        >
          {navTabs.map((tab, index) => (
            <div className="group overflow-hidden">
              <a
                key={index}
                href={tab.href}
                className="hover:text-orange-500 after:"
                onClick={closeMenu}
              >
                {tab.label}
              </a>
              <div className="h-[2px] w-full bg-orange-500 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
        <div className="md:hidden z-50 absolute right-4">
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
    </nav>
  );
};

export default Navbar;
