import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import "./styles.css"; // Import your CSS
import AppRouter from "./AppRouter";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
