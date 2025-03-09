import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaCircle } from "react-icons/fa";
import ModalForMore from "../../../ModalForMore";

const ExperienceCard = ({
  image,
  company,
  jobType,
  description,
  location,
  timePeriod,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="mt-20" data-aos="fade-up">
        <div
          onClick={openModal}
          className="relative flex flex-col ring-2 shadow-[rgba(0,0,0,1)_7px_7px_0px_1px] duration-700 ring-gray-400/10 hover:ring-orange-500 hover:shadow-orange-500 h-full  p-4 rounded-lg group"
        >
          <div className="-mt-20 flex justify-between items-end">
            <img
              src={image}
              alt=""
              className="h-32 w-32  shadow-[rgba(0,0,0,1)_7px_7px_0px_1px] group-hover:shadow-orange-500 object-cover rounded-lg  ring-2 ring-gray-400/10 group-hover:ring-orange-500"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-bold text-white text-center">
                {company}
              </h3>
              <p className="text-gray-400 text-center text-xs">{location}</p>
            </div>
          </div>
          <div className="overflow-hidden h-full">
            <div className="flex flex-col pt-4 items-start justify-between h-full transition-all transform translate-y-12 group-hover:translate-y-0 duration-500">
              <div className="flex flex-col items-start">
                <div className="w-full mb-1">
                  <div className="flex justify-between w-full items-center">
                    <h3 className="font-bold text-white text-center">
                      Software Developer
                    </h3>
                    <h4 className="text-xs text-gray-500">{timePeriod}</h4>
                  </div>
                  <h4 className="text-xs">({jobType})</h4>
                </div>
                <div className="text-gray-300 transition-all duration-300 md:text-sm text-xs line-clamp-4 mb-2">
                  {description.split("\n\n").map((para, index) => (
                    <p key={index} className="mb-2">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <ModalForMore
          isOpen={isModalOpen}
          onClose={closeModal}
          content={{
            name: company,
            title: "Software Developer",
            description: description,
            type: jobType,
            image: image,
            timePeriod: timePeriod,
            location: location,
          }}
        />
      </div>
    </>
  );
};

export default ExperienceCard;
