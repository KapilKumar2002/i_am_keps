import React from "react";
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
    // liveLink,
    // githubLink,
  } = content;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl max-h-full   w-full ring-2 ring-orange-500 shadow-lg shadow-orange-500 overflow-y-scroll scrollbar">
        <div className="bg-gray-900 w-full sticky top-0 p-4 rounded-t-lg flex justify-between items-center">
          <button onClick={onClose} className="">
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-white text-center">
              {title ?? type}
            </h3>
            <h4 className="text-xs text-gray-300">{timePeriod}</h4>
          </div>
          <div>
            <FaExternalLinkAlt />
          </div>
        </div>
        <div className="w-full">
          <img src={image} alt="" className="h-72 w-full object-cover" />
          <div className="p-2">
            <div className="flex justify-between items-center md:mb-4 mb-2">
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-white text-center">{name}</h3>
                <p className="text-gray-400 text-center text-xs">{location}</p>
              </div>
              {!isProject ? (
                <p className="text-xs text-gray-300 flex items-center gap-2">
                  <FaCircle color="orange" /> <span>{type}</span>
                </p>
              ) : (
                <div
                  // to={githubLink}
                  // target="_blank"
                  className="p-3 ring-2 rounded-md ring-orange-500 shadow-lg hover:bg-orange-500 hover:scale-110 duration-700 hover:text-black"
                >
                  <FaGithub />
                </div>
              )}
            </div>
            <ul className="list-inside text-sm">
              {description.split("\n\n").map((para, index) => (
                <li key={index} className="mb-2">
                  {para}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForMore;
