import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../../data/projectsData";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="p-8 max-sm:p-3 flex flex-col gap-5 pt-20"
      data-aos="fade-up"
    >
      <div className="flex gap-2 items-center">
        <div className="h-10 w-2 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
        <h2 className="text-3xl font-bold text-white">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
