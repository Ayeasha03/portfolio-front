import React from 'react';
import { Link } from 'react-router-dom';
import techProjects from './techProjectsData'; 

const limitedTechProjects = techProjects.slice(0, 4); 

function Projects() {
  return (
    <section id="projects" className="bg-white py-12">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">Projects</h2>
      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-500 text-center mb-6">Tech Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {limitedTechProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
          <Link to="/tech-projects" className="text-teal-500 hover:underline">
            See More
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link to="/creative-works" className="text-teal-500 hover:underline">
            View My Creative Works
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
