import React, { useState } from "react";

const ProjectCard = ({ project, isSelected, onSelectProject }) => {
  const [isExpanded, setIsExpanded] = useState(isSelected);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
    onSelectProject(project);
  };

  return (
    <div className="project-card">
      <div className="project-header"></div>
      <div className="project-title">
        <h3 dangerouslySetInnerHTML={{ __html: project.name }}></h3>
        <h3 className="project-date">{project.date}</h3>
      </div>
      <p dangerouslySetInnerHTML={{ __html: project.description }}></p>

      {!isExpanded && (
        <button className="project-button" onClick={toggleDetails}>
          Voir le projet
        </button>
      )}

      {isExpanded && (
        <div className="project-details">
          <p dangerouslySetInnerHTML={{ __html: project.details }}></p>
          
          {project.documentation || project.Github ? (
            <div className="project-links">
              {project.documentation && (
                <a
                  href={project.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                  title={`Documentation ${project.name}`}
                >
                  📂 Documentation
                </a>
              )}
              {project.Github && (
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                  title={`Github ${project.name}`}
                >
                  📦 GitHub
                </a>
              )}
            </div>
          ) : null}

          {project.télécharger && (
            <a
            href={`${process.env.PUBLIC_URL}${project.télécharger}`}
              download
              className="project-button"
              title={`Télécharger ${project.name}`}
            >
              📂 Télécharger
            </a>
          )}
          {project.télécharger2 && (
            <a
            href={`${process.env.PUBLIC_URL}${project.télécharger2}`}
              download
              className="project-button"
              title={`Télécharger ${project.name}`}
            >
              📄 Télécharger
            </a>
          )}
          

          <button className="project-button" onClick={toggleDetails}>
            Voir moins
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
