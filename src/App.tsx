import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PianoImage from "./images/piano.png";
import SafariInitial from "./images/safari/initial.png"
import SafariClick from "./images/safari/click.png"
import SafariIcon from "./images/safari/enter.png"
import SpotifyInitial from "./images/spotify/initial.png"
import SpotifyHover from "./images/spotify/hover.png"
import SpotifyActive from "./images/spotify/active.png"
import MailInitial from "./images/mail/initial.png"
import MailClick from "./images/mail/click.png"
import MailActive from "./images/mail/active.png"
import StateDiagram from "./images/redesign/statemodel.png"
import SafariRedesign1 from "./images/redesign/initial.png"
import SafariRedesign2 from "./images/redesign/hover.png"
import ImageDisplay
  from "./imageDisplay";

const sections = ["home", "experience", "projects"];
const imageSets = [
  {
    text : [
      "Safari", "Inputs", "Outputs",
      "Mouse & Touchpad", "can click (double, triple), drag, highlight, but search icon does not click", "click highlights outline and cursor, screenreader gives instructions and reads out letters",
      "Keyboard", "copy paste highlight shortcuts, esc to exit, op+command+F to enter", "focus order slow to navigate to search results",
      "Touch", "tap (double and triple), x to navigate out", "tap gives you options to share, select"
    ],
    images: [SafariInitial, SafariClick, SafariIcon],
  },
  {
    text : [
      "Spotify", "Inputs", "Outputs",
      "Mouse & Touchpad", "can click (double, triple), drag, highlight, search icon clicks", "click/hover highlights outline, screenreader does not read what you type or highlight",
      "Keyboard", "copy paste highlight shortcuts, esc deletes, shift or command K to search", "focus order good to go to search results but slow to navigate back",
      "Touch", "tap (double and triple), cancel button or swipe up to navigate out", "tap gives you option to autofill"
    ],
    images: [SpotifyInitial, SpotifyHover, SpotifyActive],
  },
  {
    text : [
      "Mail", "Inputs", "Outputs",
      "Mouse & Touchpad", "can click (double, triple), drag, highlight, but search icon does not click", "click highlights outline and cursor, screenreader says tooolbar, not search, reads out as you type and select",
      "Keyboard", "copy paste highlight shortcuts, esc to exit, tab to enter", "focus order goes to mailboxes, not to results",
      "Touch", "tap (double and triple), x or swipe up to navigate out", "tap and release tap lightens search bar"
    ],
    images: [MailInitial, MailClick, MailActive],
  },
];




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

  const [showSubtopics, setShowSubtopics] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    research: false,
    model: false,
    redesign: false,
    reflection: false,
  });

  const toggleSubtopics = () => {
    setShowSubtopics(!showSubtopics);
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

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
          <h1 className="greeting">hi, it's Kristen</h1>
          <div className="greeting-container">
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
        <div className="projects-box">
          <h2>projects</h2>

          <h3 className="clickable" onClick={toggleSubtopics}>
            accessible components {showSubtopics ? "▲" : "▼"}
          </h3>

          {showSubtopics && (
            <div className="subtopics">
              {/* Application Research */}
              <p className="clickable" onClick={() => toggleSection("research")}>
                application research {expandedSections.research ? "▲" : "▼"}
              </p>
              {expandedSections.research && (
                <div>
                  {imageSets.map((set, index) => (
                    <ImageDisplay key={index} images={set.images} text={set.text} />
                  ))}
                </div>
              )}

              {/* State Model */}
              <p className="clickable" onClick={() => toggleSection("model")}>
                state model {expandedSections.model ? "▲" : "▼"}
              </p>
              {expandedSections.model && (
                <img
                  src={StateDiagram}
                  alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                  className="state"
                />
              )}

              {/* Component Redesign */}
              <p className="clickable" onClick={() => toggleSection("redesign")}>
                component redesign: safari search bar {expandedSections.redesign ? "▲" : "▼"}
              </p>
              {expandedSections.redesign && (
                <div className="redesign-images">
                  <img
                    src={SafariRedesign1}
                    alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                    className="redesign"
                  />
                  <img
                    src={SafariRedesign2}
                    alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                    className="redesign"
                  />
                </div>
              )}

              {/* Reflection */}
              <p className="clickable" onClick={() => toggleSection("reflection")}>
                reflection {expandedSections.reflection ? "▲" : "▼"}
              </p>
              {expandedSections.reflection && <p className = "reflection"><br />The search bars I observed all
                have good support for keyboard actions, mouse clicks, and highlighting.
                Adding a search shortcut addresses the fact that keyboard shortcuts are
                more and more widely used in technology. Making the search icon clickable
                tailors to the fact that icons are cues in the real world. <br /> <br />When doing
                application research, all the search boxes did not change their font size
                when the font size was larger on a user's system settings.
                Spotify's screenreader support was especially poor, as the screenreader
                did not indicate what the search bar was, only saying "window." <br /> <br />
                It seems like mouse and touch are most commonly prioritized, which
                can make it harder to search or understand the screen context for users
                who only use a keyboard or who rely on a screen reader. </p>}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
