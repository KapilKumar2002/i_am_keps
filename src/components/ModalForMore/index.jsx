import React, { useEffect } from "react";
import {
  FaChevronLeft,
  FaCircle,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ModalForMore = (props) => {
  const { isOpen, onClose, content } = props;
  const {
    name,
    title,
    image,
    description,
    location,
    timePeriod,
    type,
    isProject,
    liveLink,
    githubLink,
    techStack,
  } = content;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl max-h-full   w-full ring-2 ring-orange-500 shadow-lg shadow-orange-500 overflow-y-scroll scrollbar">
        <div className="bg-gray-900 w-full sticky top-0 p-4 py-2 rounded-t-lg flex justify-between items-center">
          <button onClick={onClose} className="">
            <FaChevronLeft className="md:w-6 md:h-6" />
          </button>
          <div className="flex flex-col items-center">
            <h3 className="font-bold  text-center max-sm:text-sm">
              {title ?? type}
            </h3>
            <h4 className="text-xs text-gray-300">{timePeriod}</h4>
          </div>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
        <div className="w-full">
          <img
            src={image}
            alt=""
            className="md:h-56 sm:h-48 h-40 w-full object-cover"
          />
          <div className="sm:p-4 p-2">
            <div className="flex justify-between items-center md:mb-4 mb-2">
              <div className="flex flex-col items-start">
                <h3 className="font-bold  text-center">{name}</h3>
                <p className="text-gray-400 text-center text-xs">{location}</p>
              </div>
              {!isProject ? (
                <p className="text-xs text-gray-300 flex items-center gap-2">
                  <FaCircle color="orange" /> <span>{type}</span>
                </p>
              ) : (
                <a
                  href={githubLink}
                  target="_blank"
                  className="p-1 text-xs ring-2 rounded-sm ring-orange-500 shadow-lg hover:bg-orange-500 hover:scale-110 duration-700 hover:text-black"
                >
                  <FaGithub />
                </a>
              )}
            </div>
            <ul className="list-disc list-inside sm:text-sm text-xs">
              {description.split("\n\n").map((para, index) => (
                <li key={index} className="mb-2">
                  {para}
                </li>
              ))}
            </ul>
            <h1 className="font-bold mb-2 text-sm">
              {isProject ? "Tech Stacks" : "Skills"}
            </h1>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="ring-1 rounded-full text-xs px-2 py-1 ring-gray-400"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForMore;
