import React from "react";
import { useNavigate } from "react-router-dom";
import Alice from "./images/personas/alice.png"
import Devin from "./images/personas/devin.png"
import Sketch from "./images/personas/sketch.jpeg"
import Storyboard from "./images/personas/storyboard.jpeg"

const Personas: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="personas-project">
            <button onClick={() => navigate(-1)} className="back-link">Back</button>
            <h1>Personas & Storyboarding</h1>
            <div className="personas-container">
                <div className="overview">
                    <h2> Overview </h2>
                    <p>As users interact with interfaces in everyday life, how can their
                        needs and experiences be illustrated? <br></br><br></br>I explored real Brown students'
                        interactions with a dining hall fountain drink machine before
                        demonstrating their end-to-end experiences through personas and storyboarding.</p>
                </div>
                <h2> Product Research </h2>
                <div className="prod-research">
                    <img
                        src={Sketch}
                        alt="Annotated Fountain Machine Sketch"
                        className="fountain"
                    />
                    <p className="drink-caption">The interface I researched is a fountain drink machine located in Brown
                        University's Andrews Dining Hall.
                    </p>
                </div>
                <h2> User Research </h2>
                <div className="user-research-container">
                    <p className="interview-summary">From observing students using the machine,
                        most users seemed familiar with the touchscreen and found
                        their drink selections easily. <br></br><br></br><br></br>Some users had difficulty navigating
                        the touchscreen if their drink was out and spent longer doing so.
                        <br></br><br></br><br></br>Users who tried to fill their water bottles sometimes had a harder time doing so.
                    </p>
                    <p className="interview-questions">
                        I interviewed 3 students about their experience: <br></br> <br></br>
                        1. How many times a week do you use the drink machine?<br></br>
                        <i>1, 3, 14</i> <br></br> <br></br>
                        2. What are things you like, if any, when using the drink machine? <br></br>
                        <i>Water selection is easy to find</i> <br></br>
                        <i>Dispense button is intuitive</i> <br></br> <br></br>
                        3. What are frustrations, if any, that you have while using the drink machine?
                        <br></br>
                        <i>Flavor options are hard to find</i> <br></br>
                        <i>Can't tell when a subflavor is out</i> <br></br>
                        <i>Hard to fill my water bottle</i> <br></br> <br></br>
                        4. Overall, how satisfied are you when using the drink machine? (not at all, a little, somewhat, very)
                        <br></br><i>A little, somewhat, somewhat</i>
                    </p>
                </div>
                <h2> Personas </h2>
                <div className="personas">
                    <p className="persona-caption"> From my user research, I constructed
                        2 archetypal personas and their empathy maps. <br></br><br></br><br></br> Agitated Alice
                        and Drained Devin represent trends I observed across all the users I interviewed.</p>
                    <img
                        src={Alice}
                        alt="Storyboard of User's End to End Journey"
                        className="persona-image"
                    />
                    <img
                        src={Devin}
                        alt="Storyboard of User's End to End Journey"
                        className="persona-image"
                    />
                </div>
                <h2> Storyboard </h2>
                <div className="storyboard-container">
                    <p className="storyboard-caption">My final storyboard depicts Drained Devin's end-to-end user experience
                        with the fountain drink machine.</p>
                    <img
                        src={Storyboard}
                        alt="Storyboard of User's End to End Journey"
                        className="storyboard"
                    />
                </div>
            </div>
        </div>
    );
};

export default Personas;