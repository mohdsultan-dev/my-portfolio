import React from "react";
import "./Project.css";

const projects = [
  {
    title: " E-Commerce Web Application",
    description:
      "A full-stack E-Commerce  application using MERN Stack.",
    frontend: "React.js",
    backend: "Node.js, Express.js",
    database: "MongoDB",
  },
  {
    title: "🌦 Weather App",
    description:
      "A weather application that provides real-time weather information using Weather API.",
    frontend: "HTML, CSS, JavaScript",
    backend: "Weather API",
    database: "N/A",
  },
  {
    title: "📝 To-Do App",
    description:
      "A task management application with add, edit, delete and update features.",
    frontend: "React",
    backend: "N/A",
    database: "Local Storage",
  },
  {
    title: "💾 CRUD Application",
    description:
      "A CRUD application for creating, reading, updating and deleting records.",
    frontend: "HTML, CSS, JavaScript",
    backend: "Node.js, Express.js",
    database: "MongoDB",
  },
  {
    title: "🧮Calculator",
    description:
      "A  responsive calculator built using HTML,CSS,Javascript.it perform basic arithmetic operations such as addition ,substraction,multiplications,division.",
    frontend: "HTML, CSS, JavaScript",
    backend: "N/A",
    database: "N/A",
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects" name="Projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-details">
              <p>
                <strong>Frontend:</strong> {project.frontend}
              </p>

              <p>
                <strong>Backend:</strong> {project.backend}
              </p>

              <p>
                <strong>Database:</strong> {project.database}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;