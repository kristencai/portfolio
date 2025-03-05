import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";  // Main content
import Accessible from "./Accessible";
import Personas from "./Personas";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accessible" element={<Accessible />} />
        <Route path="/personas" element={<Personas />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
