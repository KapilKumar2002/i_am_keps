import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = ({
  image,
  company,
  jobType,
  description,
  techStack,
  githubLink,
  liveLink,
  timePeriod,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <div
        className="overflow-hidden duration-500 bg-gray-900 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-orange-500 hover:shadow-xl group flex flex-col justify-between ring-2 ring-blue-950/50 hover:ring-orange-500 cursor-pointer"
        onClick={openModal}
      >
        <img
          src={image}
          alt={company}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white">{company}</h3>
          <p className="text-gray-400 mb-2">{jobType}</p>
          <p className="text-gray-300 mb-4 transition-all duration-300">
            {description}
          </p>
        </div>
        <div className="flex justify-start">
          <button className="bg-orange-500 duration-500 text-white font-bold py-2 px-4 rounded transition-all  transform translate-y-16 group-hover:translate-y-0">
            Learn More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
          <div className="bg-white ring-2 ring-gray-400 rounded-lg p-6 w-full max-w-2xl h-4/5 overflow-auto">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={image}
                alt={company}
                className="w-full md:w-1/2 h-40 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{company}</h3>
                  <p className="text-gray-600 mb-2">{timePeriod}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 text-white py-1 px-3 rounded-full transition-colors duration-300 hover:bg-orange-500"
                      >
                        {tech}
                      </div>
                    ))} */}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 text-white rounded-full transition-transform transform hover:scale-110 hover:bg-yellow-500"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 text-white rounded-full transition-transform transform hover:scale-110 hover:bg-yellow-500"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
