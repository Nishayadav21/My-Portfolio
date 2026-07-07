import "./Hero.css";
import profile from "../assets/nisha.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Left Section */}
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="badge">
          ✨ Welcome to My Portfolio
        </span>

        <h1>
          Hi, I'm <br />
          <span>Nisha Yadav</span>
        </h1>

        <h2 className="typing-text">
          <TypeAnimation
            
            sequence={[
  "Full Stack MERN Developer",
  2000,
  "React Developer",
  2000,
  "Node.js & Express Developer",
  2000,
  "Problem Solver",
  2000,
]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p>
          I am a Computer Engineering student passionate about full-stack web development. I build responsive and scalable applications using React, Node.js, Express.js, and MongoDB, with a focus on clean code and great user experience.
        </p>

        <div className="buttons">

          <a href="/resume.pdf" download>
            <button className="resumeBtn">
📄 Download Resume
            </button>
          </a>

         <a href="#projects">
  <button className="contactBtn">
    💻 View Projects
  </button>
</a>
<a href="https://github.com/Nishayadav21" target="_blank" rel="noreferrer">
  <button className="githubBtn">
    ⭐ GitHub
  </button>
</a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="circle"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={profile} alt="Nisha Yadav" />
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Hero;