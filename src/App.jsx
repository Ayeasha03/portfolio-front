import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio";
import TechProjects from "./components/sections/projects/techProject";
import CreativeWorks from "./components/sections/projects/creativeWork";
import Navigation from "./components/sections/navigation/navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/tech-projects" element={<TechProjects />} />
        <Route path="/creative-works" element={<CreativeWorks />} />
      </Routes>
    </Router>
  );
}

export default App;
