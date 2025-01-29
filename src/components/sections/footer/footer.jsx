import React from "react";
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

function Footer() {
  return (
    <footer className="bg-teal-500 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Ayeasha Creations. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/ayeasha03" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.instagram.com/oyinaishat32021" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://www.tiktok.com/@ayeasha_creations" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300">
            <FaTiktok className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/aishat-oyin-bb6287291" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
