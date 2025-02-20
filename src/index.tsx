import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import "./styles.css"; // Import your CSS
import App from "./App";

// Create a root element and render the App
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
