import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ModalForMore from "../../../ModalForMore";

const ProjectCard = ({
  image,
  name,
  description,
  techStack,
  githubLink,
  liveLink,
  timePeriod,
  projectType,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="relative overflow-hidden  group rounded-lg ring-2 ring-gray-500/10 shadow-[rgba(0,0,0,1)_7px_7px_0px_1px] hover:shadow-none duration-700 transition-transform transform hover:shadow-neon-orange group flex flex-col justify-between">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4 flex-grow">
          <div className="flex justify-between items-center max-md:mb-2">
            <h3 className="font-bold text-white">{name}</h3>
            <div className="flex gap-4  md:hidden">
              <div className="p-2 rounded-md ring-2 ring-gray-400/10 hover:bg-orange-500 hover:text-black hover:scale-105 duration-700 shadow-lg">
                <FaGithub />
              </div>
              <div className="p-2 rounded-md ring-2 ring-gray-400/10 hover:bg-orange-500 hover:text-black hover:scale-105 duration-700 shadow-lg">
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-2 text-xs text-gray-400">
            <span>{projectType}</span>
            <span>{timePeriod}</span>
          </div>
          <p className="text-gray-300 mb-2 line-clamp-3 md:text-sm text-xs">
            {description}
          </p>
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
        <div className="absolute -top-96 group-hover:top-0 w-full duration-700 h-full bg-orange-500 bg-opacity-40 p-4">
          <div className="flex bg-gray-800 rounded-lg ring-2 ring-orange-500 h-full w-full justify-center items-center gap-4">
            <div
              onClick={openModal}
              className="px-3 py-2 ring-2 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] hover:ring-orange-500 hover:shadow-orange-500  ring-gray-400/10 rounded-lg"
            >
              Know More
            </div>
          </div>
        </div>
      </div>
      <ModalForMore
        isOpen={isModalOpen}
        onClose={closeModal}
        content={{
          name: name,
          title: projectType,
          description: description,
          type: projectType,
          image: image,
          timePeriod: timePeriod,
          isProject: true,
          liveLink: liveLink,
          githubLink: githubLink,
        }}
      />
    </div>
  );
};

export default ProjectCard;
