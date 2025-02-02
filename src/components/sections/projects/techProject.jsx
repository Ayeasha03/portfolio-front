import React from 'react';
import { Link } from 'react-router-dom';
import techProjects from './techProjectsData';

function TechProjects() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-500 text-center mb-6">Tech Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techProjects.map((project, index) => (
            <a
              key={index}
              onClick={() => {
                console.log('Container clicked, opening:', project.link);
                window.open(project.link, '_blank', 'noopener,noreferrer');
              }}
              className="bg-gray-100 p-4 rounded shadow hover:bg-teal-50 cursor-pointer"
            >
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded"
              />
              <h4 className="font-medium text-gray-800 mt-4">{project.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              <small className="text-gray-500">{project.tools}</small>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-teal-500 hover:underline px-4 py-2 border border-teal-500 rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TechProjects;
