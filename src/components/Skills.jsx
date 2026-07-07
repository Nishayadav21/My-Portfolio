import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFlutter,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" size={55} />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" size={55} />, name: "CSS3" },
    { icon: <SiJavascript color="#F7DF1E" size={55} />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" size={55} />, name: "React" },
    { icon: <FaNodeJs color="#339933" size={55} />, name: "Node.js" },
    { icon: <SiExpress color="#000000" size={55} />, name: "Express.js" },
    { icon: <SiMongodb color="#47A248" size={55} />, name: "MongoDB" },
    { icon: <SiFlutter color="#02569B" size={55} />, name: "Flutter" },
    { icon: <FaGithub color="#181717" size={55} />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <p>
        Technologies I use to build modern web and mobile applications.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;