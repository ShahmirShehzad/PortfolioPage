import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ProjectCard from "./ProjectCard";
import "../styles/projectSection.css";

const ProjectsSection = ({ projects, theme}) => {
  const [fetchedProjects, setFetchedProjects] = useState([]);
  console.log("Projects received in ProjectsSection: ", projects);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!Array.isArray(projects) || projects.length === 0) return;

      try {
        const fetchedData = await Promise.all(
          projects.map(async (project, index) => {
            try {
              if (!project.github) throw new Error("No GitHub URL");
          
              const parts = project.github.split("/");
              if (parts.length < 2) throw new Error("Invalid GitHub URL");
          
              const username = parts[parts.length - 2]; // Extract GitHub username
              const repoName = parts.pop(); // Extract repo name
          
              const response = await fetch(
                `https://api.github.com/repos/${username}/${repoName}`
              );
          
              if (!response.ok) {
                console.warn(`Failed to fetch: ${repoName}`);
                return null;
              }
          
              const data = await response.json();
          
              return {
                id: `github-${index}`,
                title: data.name || project.title,
                description: data.description || project.description,
                github: project.github,
                image: project.image
                // image: `https://opengraph.githubassets.com/1/${username}/${repoName}`,
              };
            } catch (err) {
              console.error("Error processing project:", err);
              return null;
            }
          })
        );

        setFetchedProjects(fetchedData.filter(Boolean)); // Remove null entries
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [projects]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedProjects = [...fetchedProjects];
    const [movedProject] = reorderedProjects.splice(result.source.index, 1);
    reorderedProjects.splice(result.destination.index, 0, movedProject);

    setFetchedProjects(reorderedProjects);
  };

  return (
    <Container className="projects-container" id="projects-section" style={{background: theme === "light" ? "#fff8f5" : "#4f2b1936"}}>
      <h2 className="text-center mb-5 projectH2">My GitHub Projects</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-projects" direction="horizontal">
          {(provided) => (
            <Row
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="draggable-projects"
            >
              {fetchedProjects.length > 0 ? (
                fetchedProjects.map((project, index) => (
                  <Draggable
                    key={project.id}
                    draggableId={String(project.id)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-item"
                      >
                        <ProjectCard project={project} />
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <p>Loading projects...</p>
              )}
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default ProjectsSection;
