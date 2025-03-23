import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/dataEntry.css";

const DataEntry = ({ theme }) => {
  const navigate = useNavigate();
  const initialStudentState = {
    name: "",
    bio: "",
    profilePicture: "",
    skills: "",
    interests: "",
    description: "",
    projects: [],
    socialMedia: [],
  };

  const initialProjectState = {
    title: "",
    description: "",
    image: "",
    github: "",
  };

  const initialSocialState = { name: "", url: "" };

  const [student, setStudent] = useState(initialStudentState);
  const [project, setProject] = useState(initialProjectState);
  const [social, setSocial] = useState(initialSocialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocial((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "profile") {
          setStudent((prev) => ({ ...prev, profilePicture: reader.result }));
        } else if (type === "project") {
          setProject((prev) => ({ ...prev, image: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addProject = () => {
    setStudent((prev) => ({ ...prev, projects: [...prev.projects, project] }));
    setProject(initialProjectState);
  };

  const addSocial = () => {
    setStudent((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, social],
    }));
    setSocial(initialSocialState);
  };

  const handleSubmit = () => {
    if (
      !student.name.trim() ||
      !student.bio.trim() ||
      !student.profilePicture.trim() ||
      !student.skills.trim() ||
      !student.interests.trim() ||
      !student.description.trim()
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (student.projects.length === 0) {
      alert("Please add at least one project.");
      return;
    }

    if (student.socialMedia.length === 0) {
      alert("Please add at least one social media link.");
      return;
    }

    console.log("DATA :: ", student);
    navigate("/home", { state: { student } });

    setStudent(initialStudentState);
    setProject(initialProjectState);
    setSocial(initialSocialState);
  };

  return (
    <Container
      className="pt-4 pb-4 container"
      style={{ background: theme === "light" ? "#fff8f5" : "#4f2b1936" }}
    >
      <h2 className="text-center headings">Data Entry Page</h2>
      <Form>
        <h3 className="text-center headings">About Me</h3>
        <Row className="justify-content-center">
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Short Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={student.bio}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "profile")}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Skills (comma separated)</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={student.skills}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Interests</Form.Label>
              <Form.Control
                type="text"
                name="interests"
                value={student.interests}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Detailed Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={student.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <h3 className="text-center headings">Projects</h3>
        <Row className="justify-content-center">
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={project.title}
                onChange={handleProjectChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={project.description}
                onChange={handleProjectChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Project Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "project")}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control
                type="text"
                name="github"
                value={project.github}
                onChange={handleProjectChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row md={6} xs={3} className="justify-content-center">
          <Button
            variant="primary"
            onClick={addProject}
            className="mb-3 buttons"
          >
            Add Project
          </Button>
        </Row>

        <h3 className="text-center headings">Social Media</h3>
        <Row className="justify-content-center">
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Social Media Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={social.name}
                onChange={handleSocialChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Social Media URL</Form.Label>
              <Form.Control
                type="text"
                name="url"
                value={social.url}
                onChange={handleSocialChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row md={6} xs={3} className="justify-content-center">
          <Button
            variant="secondary"
            onClick={addSocial}
            className="mb-3 buttons"
          >
            Add Social Media
          </Button>
        </Row>

        <Row
          md={6}
          xs={3}
          className="justify-content-center"
          style={{ marginBottom: "50px" }}
        >
          <Button variant="success" onClick={handleSubmit} className="buttons">
            Generate Portfolio
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default DataEntry;
