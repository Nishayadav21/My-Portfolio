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
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>💼 SkillNova Internship Platform</h3>

          <p>
            A full-stack MERN internship platform where students can search and
            apply for internships while recruiters can manage job postings and
            applications through an admin dashboard.
          </p>

          <span>React • Node.js • Express • MongoDB</span>

          <div className="project-buttons">
            <a
              href="https://github.com/Nishayadav21/SkillNova-Backend"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <p
            style={{
              marginTop: "15px",
              color: "#7c3aed",
              fontWeight: "600",
            }}
          >
            🚧 Currently Under Development
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>🌐 Personal Portfolio Website</h3>

          <p>
            Designed and developed a modern responsive portfolio using React
            and CSS to showcase my projects, technical skills, education, and
            resume.
          </p>

          <span>React • CSS • Vite</span>

          <div className="project-buttons">
            <a
              href="https://github.com/Nishayadav21/My-Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://my-portfolio-git-main-nishayadav21s-projects.vercel.app"
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