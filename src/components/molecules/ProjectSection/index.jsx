import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image:
      "https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2024/02/19175158/software-development-trends-feature-image-1024x554.jpg",
    name: "Project One",
    description:
      "Description of Project One. This is a longer description to test the line clamping.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/yourusername/project-one",
    liveLink: "https://project-one-live.com",
  },
  {
    image:
      "https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2024/02/19175158/software-development-trends-feature-image-1024x554.jpg",
    name: "Project Two",
    description:
      "Description of Project Two. This is a longer description to test the line clamping.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/project-two",
    liveLink: "https://project-two-live.com",
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="p-8 flex flex-col gap-5 pt-20"
      data-aos="fade-up"
    >
      <div className="flex gap-2 items-center">
        <div className="h-10 w-2 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
        <h2 className="text-3xl font-bold text-white">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
