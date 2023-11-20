import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./aboutme.css";

function AboutMe() {
  return (
    <React.Fragment>
      <Card className="about-card">
        <div className="about-text">
          <h1 className="about-heading">
            I'm Alex Soto Full Stack Software Engineer
          </h1>
          <p className="about-body">
            I am a dedicated Full Stack Software Engineer with a background in
            both military operations and software development.
          </p>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/alexsoto562"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="social-tooltip">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alejandro-soto562/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="social-tooltip">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:sotoalex562@gmail.com"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="social-tooltip">Email</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="about-image">
          <img src="path-to-your-image.jpg" alt="Alex Soto" />
        </div>
      </Card>
    </React.Fragment>
  );
}
export default AboutMe;
