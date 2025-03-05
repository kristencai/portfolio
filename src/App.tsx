import React from "react";
import { useNavigate} from "react-router-dom"; import { Link } from "react-scroll";
import PianoImage from "./images/piano.png";


const sections = ["home", "experience", "projects"];
const projects = [
  { id: "1", title: "Accessible Search Bar", path: "/accessible" },
  { id: "2", title: "Personas & Storyboarding", path: "/personas" },
  { id: "3", title: "Responsive Redesign", path: "/responsiveredesign" },
  { id: "4", title: "Iterative Design", path: "/iterativedesign" },
];

const Projects: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="experience-header">projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => {
                window.scrollTo(0, 0); 
                navigate(project.path);
              }} 
            >
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const App: React.FC = () => {
  const experienceData = [
    {
      title: "incoming forward deployed software engineer @ palantir",
      description: "july 2025",
    },
    {
      title: "head teaching assistant csci0170: computer science, an integrated introduction",
      description: "fall 2023-2024",
    },
    {
      title: "software engineering intern @ cisco",
      description: "may-august 2023/2024",
    },
    {
      title: "software engineering intern @ zebra",
      description: "may-august 2022",
    },
  ];

 
  return (
    <div>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
              >
                {section.charAt(0) + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section id="home">
        <div className="home">
          <h1 className="intro">hi, it's Kristen</h1>
          <div className="intro-container">
            <img src={PianoImage} alt="Piano" className="piano" />
            <p className="intro-paragraph">
              I'm a senior studying applied mathematics-computer science @ brown graduating this spring.
            </p>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="experience">
          <div className="experience-header">
            <h2>experience</h2>
          </div>
          <div className="experience-boxes">
            {experienceData.map((experience, index) => (
              <div key={index} className="experience-box">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
      <div>
        <Projects />
      </div>
      </section>
    </div>
  );
};

export default App;
