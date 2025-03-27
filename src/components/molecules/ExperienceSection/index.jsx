import React from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../../data/experienceData.js";
import Title from "../../atoms/Title/index.jsx";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="flex flex-col gap-5 pt-24 p-8 max-md:px-3"
      data-aos="fade-up"
    >
      <Title title="Experience" className={"justify-center"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
