import React from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../../data/experienceData.js";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="md:p-8 p-3 flex flex-col gap-5 pt-28"
      data-aos="fade-up"
    >
      <div className="flex gap-2 items-center">
        <div className="h-10 w-2 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
