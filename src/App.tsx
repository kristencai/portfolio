import React from "react";
import { Link } from "react-scroll";

const sections = ["home", "about", "experience", "projects"];

const App: React.FC = () => {
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
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my portfolio!</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Information about me.</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>Details about my work experience.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Some of the projects I’ve worked on.</p>
      </section>
    </div>
  );
};

export default App;
