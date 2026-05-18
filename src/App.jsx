import { useState } from "react";
import "./App.css";

const cvPath = `${import.meta.env.BASE_URL}Deniz_Utku_Celebi_CV.pdf`;

const featuredProject = {
  title: "Smart Home IoT System",
  category: "Cloud / IoT",
  description:
    "Cloud-enabled smart home system for temperature and humidity monitoring with remote device control. Built as an academic IoT and cloud computing final project.",
  tech: ["Python", "FastAPI", "MQTT", "Azure PostgreSQL", "Swagger", "Postman"],
  github: "https://github.com/PrometheusF/Iot-FinalProject",
};

const projects = [
  {
    title: "To-Do List WPF Desktop App",
    category: "Desktop App",
    description:
      "Task management desktop app with MVVM structure, search, filters, status tracking, and JSON local storage.",
    tech: ["C#", "WPF", "MVVM", "JSON"],
    github: "https://github.com/PrometheusF/TodoListWpfApp",
  },
  {
    title: "Boxing Winner Prediction ML",
    category: "Data / ML",
    description:
      "Machine learning project for predicting boxing match winners using fighter statistics, feature engineering, and classification models.",
    tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    github: "https://github.com/PrometheusF/Boxing-Winner-Prediction-ML",
  },
  {
    title: "XDrive Website",
    category: "Front-End",
    description:
      "Responsive multi-page vehicle rental website built to practice layout structure, navigation, and mobile-first design.",
    tech: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/PrometheusF/XdriveProject",
  },
  {
    title: "Personal Portfolio Website",
    category: "Front-End",
    description:
      "Responsive personal website built with HTML, CSS, and JavaScript, including dark/light mode and smooth scrolling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PrometheusF/basic-portfolio-site",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C#",
  "WPF",
  "Python",
  "SQL Basics",
  "Git",
  "GitHub",
  "REST APIs",
  "Postman",
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "page dark" : "page"}>
      <nav className="navbar">
        <h2>Deniz Celebi</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">IT Student • Poznan, Poland</p>
        <h1>Building practical software projects as an IT student.</h1>
        <p className="hero-text">
          I am an Information Technology student interested in web development,
          desktop applications, data projects, and cloud-enabled systems.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a
            className="button secondary"
            href="https://github.com/PrometheusF"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="button secondary" href={cvPath} download>
            Download CV
          </a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Who I am</h2>
        </div>

        <div className="about-card">
          <p>
            I am currently studying Information Technology at Collegium Da Vinci
            in Poznan. I enjoy building small but complete projects that help me
            practice real software development concepts such as clean structure,
            data handling, user interfaces, APIs, and version control.
          </p>
          <p>
            My current focus is improving my skills in front-end development,
            C# desktop applications, Python data projects, and practical tools
            that solve real problems.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Featured Project</h2>
        </div>

        <article className="featured-card">
          <div>
            <span className="category">{featuredProject.category}</span>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>

            <div className="tags">
              {featuredProject.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <a href={featuredProject.github} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </article>

        <div className="section-heading projects-heading">
          <p className="eyebrow">More Work</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Technical</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section resume">
        <div>
          <p className="eyebrow">Resume</p>
          <h2>Looking for internship opportunities</h2>
          <p>
            I am open to entry-level internship roles in IT support, front-end
            development, software development, data projects, and technical
            support.
          </p>
        </div>

        <a className="button primary" href={cvPath} download>
          Download CV
        </a>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect</h2>
          <p>
            Feel free to contact me for internship opportunities, project
            discussions, or entry-level IT/software roles.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:denizutkucelebi204@gmail.com">
            denizutkucelebi204@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/deniz-utku-celebi-504430231"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/PrometheusF"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Deniz Celebi. Built with React and Vite.</p>
      </footer>
    </main>
  );
}

export default App;