import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  image,
  name,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="bg-gray-900  relative overflow-hidden  group rounded-lg ring-2 ring-gray-500/10 shadow-lg transition-transform transform hover:shadow-neon-orange group flex flex-col justify-between">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white py-1 px-3 rounded-full transition-colors duration-300 hover:bg-orange-500"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute rounded-lg -bottom-full p-4 h-full group-hover:bottom-0 duration-500 w-full bg-gray-600">
        <div className="flex h-full w-full justify-center items-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex justify-center items-center w-10 h-10 rounded-md shadow-lg ring-2 ring-gray-900/10 hover:bg-orange-500 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex justify-center items-center w-10 h-10 rounded-md shadow-lg ring-2 ring-gray-900/10 hover:bg-orange-500 transition-colors duration-300"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
