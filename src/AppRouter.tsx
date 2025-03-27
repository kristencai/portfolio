import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";  // Main content
import Accessible from "./Accessible";
import Personas from "./Personas";
import Redesign from "./Redesign"


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accessible" element={<Accessible />} />
        <Route path="/personas" element={<Personas />} />
        <Route path="/redesign" element={<Redesign />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
