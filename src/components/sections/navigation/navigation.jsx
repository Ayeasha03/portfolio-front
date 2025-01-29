// src/components/sections/navigation/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Home</Link>
        <div className="flex gap-4">
          <Link to="/tech-projects" className="hover:underline">Tech Projects</Link>
          <Link to="/creative-works" className="hover:underline">Creative Works</Link>
          {/* Add other links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
