import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./portfolio";
import TechProjects from "./components/sections/projects/techProject";
import CreativeWorks from "./components/sections/projects/creativeWork";
import Navigation from "./components/sections/navigation/navigation";

function App() {
  return (
    <Router>
      <TitleUpdater /> 
      <Navigation />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/tech-projects" element={<TechProjects />} />
        <Route path="/creative-works" element={<CreativeWorks />} />
      </Routes>
    </Router>
  );
}

// Component to update document title dynamically
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    let title = "Ayeasha Creations"; // Default title
    if (location.pathname === "/tech-projects") {
      title = "Tech Projects - Ayeasha Creations";
    } else if (location.pathname === "/creative-works") {
      title = "Creative Works - Ayeasha Creations";
    }
    document.title = title;
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
