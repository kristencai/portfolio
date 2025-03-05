import React from "react";
import { useNavigate } from "react-router-dom";
import SafariInitial from "./images/safari/initial.png"
import SafariClick from "./images/safari/click.png"
import SafariIcon from "./images/safari/enter.png"
import SpotifyInitial from "./images/spotify/initial.png"
import SpotifyHover from "./images/spotify/hover.png"
import SpotifyActive from "./images/spotify/active.png"
import MailInitial from "./images/mail/initial.png"
import MailClick from "./images/mail/click.png"
import MailActive from "./images/mail/active.png"
import StateDiagram1 from "./images/redesign/initialstate.png"
import StateDiagram2 from "./images/redesign/redesignedstate.png"
import SafariRedesign1 from "./images/redesign/initial.png"
import SafariRedesign2 from "./images/redesign/hover.png"
import ImageDisplay
    from "./imageDisplay";

const images = [
    {
        text: [
            "Safari", "Inputs", "Outputs",
            "Mouse & Touchpad", "can click (double, triple), drag, highlight, but search icon does not click", "click highlights outline and cursor, screenreader gives instructions and reads out letters",
            "Keyboard", "copy paste highlight shortcuts, esc to exit, op+command+F to enter", "focus order slow to navigate to search results",
            "Touch", "tap (double and triple), x to navigate out", "tap gives you options to share, select"
        ],
        images: [SafariInitial, SafariClick, SafariIcon],
    },
    {
        text: [
            "Spotify", "Inputs", "Outputs",
            "Mouse & Touchpad", "can click (double, triple), drag, highlight, search icon clicks", "click/hover highlights outline, screenreader does not read what you type or highlight",
            "Keyboard", "copy paste highlight shortcuts, esc deletes, shift or command K to search", "focus order good to go to search results but slow to navigate back",
            "Touch", "tap (double and triple), cancel button or swipe up to navigate out", "tap gives you option to autofill"
        ],
        images: [SpotifyInitial, SpotifyHover, SpotifyActive],
    },
    {
        text: [
            "Mail", "Inputs", "Outputs",
            "Mouse & Touchpad", "can click (double, triple), drag, highlight, but search icon does not click", "click highlights outline and cursor, screenreader says tooolbar, not search, reads out as you type and select",
            "Keyboard", "copy paste highlight shortcuts, esc to exit, tab to enter", "focus order goes to mailboxes, not to results",
            "Touch", "tap (double and triple), x or swipe up to navigate out", "tap and release tap lightens search bar"
        ],
        images: [MailInitial, MailClick, MailActive],
    },
];

const Accessible: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="accessible-project">
            <button onClick={() => navigate(-1)} className="back-link">Back</button>
            <h1>Accessible Search Bar</h1>
            <div className="searchbar-container">
                <div className="overview">
                    <h2> Overview </h2>
                    <p>It is crucial for web components to incoporate accessibility
                        into user interactions for different forms of input (mouse, keyboard)
                        and output (visual cues, labels for screen readers). I looked at the
                        accessibility of search bars and redesigned one to make it more accessible.
                    </p>
                </div>
                <h2> Application Research </h2>
                <div className="app-research">
                    <p>I researched the search bars for Safari, Spotify, and Apple Mail,
                        taking notes using different inputs (mouse, keyboard, touchscreen) and
                        the outputs (color cues, focus order, etc.).
                    </p>
                    {images.map((set, index) => (
                        <ImageDisplay key={index} images={set.images} text={set.text} />
                    ))}
                </div>
                <h2> State Model </h2>
                <div className="redesign-images">
                    <div className="labeled-state">
                        <img
                            src={StateDiagram1}
                            alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                            className="redesign"
                        />
                        <p>The first state model I created demonstrates Safari's
                            current search box. <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            The second one adds a hover effect for mouse users and a keyboard shortcut
                            for keyboard users.
                        </p>
                    </div>
                    <img
                        src={StateDiagram2}
                        alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                        className="redesign2"
                    />
                </div>
                <h2> Component Redesign: Safari search bar </h2>
                <div className="redesign-container">
                    <div className="redesign-images">
                        <img
                            src={SafariRedesign1}
                            alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                            className="safari-bar"
                        />
                        <img
                            src={SafariRedesign2}
                            alt="Search Bar State Diagrams for Mouse and Keyboard Users"
                            className="safari-bar"
                        />
                    </div>
                    <p className="redesign-caption">I redesigned Safari's search bar based off my state models.
                    </p>
                </div>
                <h2> Reflection </h2>
                <p className="reflection"><br />The changes I added are only a small
                    part of increasing accessibility. The search bars I observed all
                    have good support for keyboard actions, mouse clicks, and highlighting.
                    Additional changes include increasing screenreader support and
                    changing font size according to system settings. <br></br>
                    <br></br><br></br>
                    Often, mouse and touchscreen inputs are more commonly prioritized, which
                    can make it harder to search or understand the screen context for users
                    who only use a keyboard or who rely on a screen reader. </p>
            </div>
        </div>



    );
};

export default Accessible;

// The search bars I observed all
//                     have good support for keyboard actions, mouse clicks, and highlighting.
//                     Addressing "mismatches" between users and features we offer them, adding a search shortcut addresses the fact that keyboard shortcuts are
//                     more and more widely used in technology. Making the search icon clickable
//                     tailors to the fact that icons are cues in the real world. <br /> <br />When doing
//                     application research, all the search boxes did not change their font size
//                     when the font size was larger on a user's system settings.
//                     Spotify's screenreader support was especially poor, as the screenreader
//                     did not indicate what the search bar was, only saying "window."

