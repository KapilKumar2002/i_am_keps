import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../../data/projectsData";
import Title from "../../atoms/Title";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="p-8 flex flex-col gap-5 pt-20 max-md:px-3"
      data-aos="fade-up"
    >
      <Title title="Projects" className={"justify-center"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
