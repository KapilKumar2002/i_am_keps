import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    image:
      "https://waz.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg?bn=15100111939",
    company: "Company One",
    jobType: "Full-time",
    description:
      "Description of the job at Company One. Description of the job at Company Two.",
  },
  {
    image:
      "https://waz.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg?bn=15100111939",
    company: "Company Two",
    jobType: "Part-time",
    description:
      "Description of the job at Company Two. Description of the job at Company Two.",
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="p-8 flex flex-col gap-5"
      data-aos="fade-up"
    >
      <div className="flex gap-2 items-center">
        <div className="h-10 w-2 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
