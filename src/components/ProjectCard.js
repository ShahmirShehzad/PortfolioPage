import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="project-card p-3 shadow-lg">
        {project.image && (
          <motion.img
            variant="top"
            src={project.image}
            alt={project.title}
            className="project-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{project.title}</Card.Title>
          <Card.Text className="card-text">{project.description}</Card.Text>

          {/* GitHub Button with Hover Animation */}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <motion.button
              className="github-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View on GitHub
            </motion.button>
          </a>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
