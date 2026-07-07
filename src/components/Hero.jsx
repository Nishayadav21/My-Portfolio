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
              "Computer Engineering Student",
              2000,
              "MERN Stack Developer",
              2000,
              "Backend Developer",
              2000,
              "React Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p>
          Passionate MERN Stack Developer and React Learner dedicated to
          building modern, responsive, and user-friendly web applications.
          I enjoy solving real-world problems through clean and efficient code.
        </p>

        <div className="buttons">

          <a href="/resume.pdf" download>
            <button className="resumeBtn">
              📄 Download Resume
            </button>
          </a>

          <a href="#contact">
            <button className="contactBtn">
              📩 Contact Me
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