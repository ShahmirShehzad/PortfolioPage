import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/heroSection.css";

const HeroSection = ({ name, bio, theme }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="text-center  heroContainer" style={{background: theme === "light" ? "#fff8f5" : "#4f2b1936"}} id="hero">
      <Row className="justify-content-center" style={{ paddingLeft: "30px" }}>
        <Col md={8} className="text-start">
          <h1 className="fw-bold heroH1">{name || "Your Name"}</h1>
          <p className="lead heroBio">{bio || "A short bio about yourself."}</p>
          <Button
            size="lg"
            className="heroBtn1"
            onClick={() => scrollToSection("projects-section")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            className="heroBtn2"
            onClick={() => scrollToSection("contact-section")}
          >
            Contact me
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
