import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroSection from "./components/sections/hero/heroSection";
import AboutMe from "./components/sections/about/aboutMe";
import Skills from "./components/sections/skills/skills";
import Projects from "./components/sections/projects/project";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/sections/footer/footer";
import "./App.css";

function Portfolio() {
  return (
    <div className="portfolio font-sans">
      <ToastContainer />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
