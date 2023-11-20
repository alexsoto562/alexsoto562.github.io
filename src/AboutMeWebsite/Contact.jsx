import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./contact.css"; // Make sure to create this CSS file

function Contact() {
  return (
    <div className="contact-container">
      <Card className="contact-card">
        <Card.Body>
          <Card.Title className="contact-title">
            Let's Get in Touch: Ways to Connect with Me
          </Card.Title>
          <Card.Text className="contact-text">
            Thank you for visiting my webpage! I sincerely hope that my
            showcased projects and the design of this page effectively
            illustrate the skills and dedication I can bring to any team. If
            you'd like to see my resume or discuss potential opportunities,
            please don't hesitate to reach out via email:
            <a href="mailto:sotoalex562@gmail.com" className="email-link">
              {" "}
              sotoalex562@gmail.com
            </a>
            . I am committed to responding within 24 hours. Once again, I
            appreciate your interest and am eager to connect and explore how we
            might collaborate. Looking forward to our conversation!
          </Card.Text>
          <div className="social-icons">
            <a href="https://github.com/alexsoto562" className="icon-link">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-soto562/"
              className="icon-link"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
