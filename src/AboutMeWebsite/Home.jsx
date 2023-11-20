import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./aboutme.css";

function Home() {
  return (
    <React.Fragment>
      <Card className="about-card">
        <div className="about-text">
          <h1 className="about-heading">Full Stack Software Engineer</h1>
          <p className="about-body">
            As a full-stack software engineer with an active secret clearance,
            my expertise in developing robust web applications using a variety
            of frameworks and technologies sets me apart. Skilled in JavaScript,
            React, .NET, SQL, and a suite of modern development tools, I excel
            in creating efficient, user-friendly software solutions. My
            experience encompasses a broad spectrum of software development
            tasks, from front-end design using HTML5, CSS3, and Bootstrap, to
            back-end development with C# and ASP.NET. My passion lies in
            tackling complex coding challenges and continually expanding my
            skill set in the ever-evolving landscape of software development. I
            am adept at leveraging API calls for dynamic data retrieval and
            display, optimizing web page performance through effective code
            management, and building responsive user interfaces that adapt
            seamlessly across various devices. Additionally, my disciplined work
            ethic, honed during my service as an Air Force veteran, complements
            my technical abilities, ensuring that I approach each project with
            meticulous attention to detail and a commitment to excellence.
            Seeking new opportunities that will allow me to push the boundaries
            of my development skills, I am eager to contribute to a team where
            innovation and growth are paramount. As a developer who thrives in
            solving complex problems and building simple, effective code, I look
            forward to exploring new challenges and contributing to impactful
            software projects.
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
export default Home;
