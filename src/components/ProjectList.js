import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, selectedProject, onSelectProject }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          isSelected={selectedProject?.name === project.name}
          onSelectProject={onSelectProject}
        />
      ))}
    </>
  );
};





export default ProjectList;