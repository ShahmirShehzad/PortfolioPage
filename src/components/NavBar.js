import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ theme, toggleTheme }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setExpanded(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`${styles.wrapperDiv}`}
    >
      <Container fluid style={{ padding: 0 }}>
        {/* Brand Section */}
        <div className="d-flex justify-content-start align-items-center">
          <img className={`${styles.navIcon}`} src={""} alt="" />
          <Navbar.Brand
            href="#"
            className={`${styles.navIconText} ${styles.navbarBrand}`}
          >
            PortfolioSite
          </Navbar.Brand>
        </div>
        {/* Collapsible Toggle */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={`${styles.navbarToggler}`}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* Navbar Links Section */}
        <Navbar.Collapse
          id="navbarScroll"
          className={`${styles.navbarCollapse}`}
        >
          <div
            className={`${styles.navBarDiv} d-flex justify-content-center w-100 flex-wrap`}
          >
            <Nav className="mx-auto">
              <Nav.Link
                className={`${styles.navLink} px-3`}
                onClick={() => handleScroll("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink} px-3`}
                onClick={() => handleScroll("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink} px-3`}
                onClick={() => handleScroll("projects-section")}
              >
                Project
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink} px-3`}
                onClick={() => handleScroll("contact-section")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
        <Button variant="outline-dark" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
