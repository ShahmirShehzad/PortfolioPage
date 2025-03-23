import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/aboutMe.css";

const AboutMe = ({ profilePicture, skills, description, theme }) => {
  const skillsList =
    typeof skills === "string"
      ? skills.split(",").map((skill) => skill.trim())
      : skills || [];

  return (
    <Container
      className="py-5"
      style={{ background: theme === "light" ? "#fff8f5" : "#4f2b1936" }}
      id="about"
    >
      <Row className="align-items-stretch">
        <Col md={2}></Col>

        <Col
          md={4}
          className="text-center text-md-start d-flex justify-content-center"
        >
          <motion.img
            src={profilePicture}
            alt="Profile"
            className="mb-3 profilePic"
            roundedCircle
            fluid
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </Col>

        <Col md={6} style={{ paddingLeft: "30px" }}>
          <motion.h2
            className="aboutH1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="aboutText"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {description || "A brief biography about yourself."}
          </motion.p>

          <motion.h4
            className="aboutH4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Skills
          </motion.h4>

          {skillsList.length > 0 ? (
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {skillsList.map((skill, index) => (
                <motion.li
                  key={index}
                  className="aboutSkills"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <p>No skills listed.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
