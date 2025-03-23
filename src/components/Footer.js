import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css"; // Add custom styling

const Footer = ({ socialMedia }) => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} className="text-center" style={{background: "linear-gradient(to right, #e38379, #db4a3c)"}}>
            <p className="footer-text">&copy; {new Date().getFullYear()} PortfolioSite</p>

            <div className="social-links">
              {socialMedia && socialMedia.length > 0 ? (
                socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {social.name}
                  </a>
                ))
              ) : (
                <p>No social links available</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
