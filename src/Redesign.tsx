import React from "react";
import { useNavigate } from "react-router-dom";
import OriginalDesign from "./images/milkcow/original.png"
import Components from "./images/milkcow/components.png"
import ComputerMockup from "./images/milkcow/computer.png"
import TabletMockup from "./images/milkcow/tablet.png"
import PhoneMockup from "./images/milkcow/phone.png"
import FinalRedesign from "./images/milkcow/final.png"



const Redesign: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="redesign-project">
            <button onClick={() => navigate(-1)} className="back-link">Back</button>
            <h1>Responsive Redesign</h1>
            <h2> Overview </h2>
            <div className="personas-container">
                <p>Many web pages have usability issues pertaining to design, learnability, and accessibility. <br></br><br></br>
                    Milkcow Cafe IL serves ice cream and cafe drinks in Vernon Hills, IL. The Vernon Hills franchise has its own website that I chose to redesign.
                    While the content is straightforward, it is
                    presented in a way that feels cluttered and lacks visual cohesion. </p>
            </div>
            <h2>Usability Problems</h2>
            <div className="mockup-item">
                <a href="https://www.milkcowil.com/" target="_blank" rel="noopener noreferrer" className="clickable-site">
                    <img src={OriginalDesign} alt="Original Website" />
                </a>
                <div className="mockup-text">
                    <p>The current home page of Milkcow has a few issues that make it hard for users to navigate: <br></br><br></br></p>
                    <ul>
                        <li>Low color contrast for text and background</li>
                        <li>Font and color choices make the navigation bar hard to read</li>
                        <li>Noncohesive background images</li>
                        <li>Redundant images and buttons, repeated information</li>
                        <li>Repeated buttons and information</li>
                        <li>Inconsistent image sizing</li>
                        <li>Unuintuitive oval social media icons</li>
                        <li>Uninformative alt text</li>
                        <li>Unintuitive links (the hours link to online ordering)</li>
                    </ul>
                    <p><br></br><br></br> WebAIM WAVE, an online accessibility tool, reports 23 contrast errors and 21 alt text errors,
                        corroborating my own findings.</p>
                </div>

            </div>

            <h2>Visual Redesign</h2>
            <div className="mockup-item">
                <p className="mockup-text">First, I used Figma to create a visual style guide with a more cohesive
                    color scheme and font style.</p>
                <img src={Components} alt="Computer Mockup" className="components" />
            </div>
            <div className="mockups">
                <div className="mockup-item">
                    <img src={ComputerMockup} alt="Computer Mockup" className="computer" />
                    <div className="mockup-text">
                        <p >Next, I designed a computer mockup. <br></br><br></br></p><ul>
                            <li>I simplified the original website down to a few sections to house different information.</li>
                            <li>I removed a lot of redundant and repeated information from the original site, such as
                                extra images and repeated buttons.
                            </li>
                            <li>I increased the font weight and used high contrast colors for better readability.
                            </li>
                            <li>Most of the sections are designed to use flex box.</li>
                            <li>Buttons and the navigation bar darken and lighten respectively when hovered over.</li>
                        </ul>
                    </div>
                </div>

                <div className="mockup-item">
                    <img src={TabletMockup} alt="Tablet Mockup" className="tablet" />
                    <img src={PhoneMockup} alt="Phone Mockup" className="phone" />
                    <div className="mockup-text">
                        <p>To demonstrate responsiveness for smaller screens, I designed a tablet (left) and phone (right) mockup. <br></br><br></br></p><ul>
                        <li>The cover text and image start off horizontally aligned, but are vertically aligned if the screen width is too small.</li>
                            <li>The 6 images are in a flex box that allow them to collapse into a grid.</li>
                            <li>The navigation bar collapses once the screen width is too small.</li>
                            <li>The images are cropped as the screen size changes, but do not drastically change size.</li>
                            <li>All font sizes besides the large "all about dessert" heading do not change as the screen size changes.</li>
                        </ul>
                        </div>
                </div>

            </div>
            <h2>Final Responsive Redesign</h2>
            <div className="mockup-item">
                <a href="https://redesign-virid.vercel.app/" target="_blank" rel="noopener noreferrer" className="clickable-site">
                    <img src={FinalRedesign} alt="Final Redesigned Website" />
                </a>
                <div className="mockup-text">
                    <p>My <a href="https://redesign-virid.vercel.app/" target="_blank" rel="noopener noreferrer" className="links"
                    >final deployed webpage</a> addresses the original design, learnability, and accessibility issues.
                        <br></br><br></br> In addition to the changes detailed in the mockups, I: <br></br><br></br></p>
                    <ul>
                        <li>added informative alt text to all images</li>
                        <li>only added
                            links intuitively (like the navigation bar)</li>
                            <li>tested usability on all screen sizes</li>
                    </ul>
                        <p><br></br> WebAIM WAVE reports 0 contrast errors and 0 alt text errors on my redesigned page.
                        <br></br><br></br>This project demonstrates the importance of web design for diverse users' experiences.</p>
                </div>
            </div>

        </div>
    );
};

export default Redesign;