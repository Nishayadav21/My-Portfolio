import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p>Some of my recent work and projects</p>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <h3>🏥 EasyMeds Hospital Management</h3>

          <p>
            A full-stack hospital management system with appointment booking,
            doctor profiles, patient management, and an admin dashboard.
          </p>

          <span>Flutter • Node.js • MongoDB</span>

          <div className="project-buttons">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>💼 SkillNova Internship Platform</h3>

          <p>
            A MERN Stack internship platform where students can apply for
            internships and companies can manage applications.
          </p>

          <span>React • Node.js • Express • MongoDB</span>

          <div className="project-buttons">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>🌐 Personal Portfolio Website</h3>

          <p>
            A responsive React portfolio website showcasing my skills,
            education, projects, and contact information.
          </p>

          <span>React • CSS</span>

          <div className="project-buttons">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://github.com/Nishayadav21/SkillNova-Backend"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;