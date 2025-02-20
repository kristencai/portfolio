import React, { useEffect } from "react";
import { Link } from "react-scroll";
import PianoImage from "./images/piano.png"; // Import the image
import NotesImage from "./images/notes.png"

const sections = ["home", "experience", "projects"];

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
      {/* Navbar */}
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

      {/* Sections */}
      <section id="home">
        <div className="home">
          <h1 className="greeting">hi, it's Kristen</h1>
          <div className="greeting-container">
            <img src={PianoImage} alt="Clipart" className="clipart" />
            <p className="intro-paragraph">
              I'm a senior studying applied mathematics-computer science @ brown graduating this spring.
            </p>
          </div>
        </div>
      </section>


      <section id="experience">
        <div className="experience">
          <div className="experience-header">
            <h2>my experience</h2>
            <img src={NotesImage} alt="music notes" className="notesimage" />
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
        <h2>projects</h2>
        <p>accessible components</p>
      </section>
    </div>
  );
};

export default App;
