import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPaintBrush, 
  FaServer, 
} from "react-icons/fa";
import { GiSewingNeedle, GiDatabase } from "react-icons/gi";

function Skills() {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" />, level: "Intermediate" },
    { name: "React", icon: <FaReact className="text-teal-400 text-4xl" />, level: "Intermediate" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, level: "Intermediate" },
    { name: "Express", icon: <FaServer className="text-gray-700 text-4xl" />, level: "Intermediate" },
    { name: "MongoDB", icon: <GiDatabase className="text-green-700 text-4xl" />, level: "Intermediate" },
  ];

  const creativeSkills = [
    { name: "Sewing", icon: <GiSewingNeedle className="text-gray-500 text-4xl" />, level: "Expert" },
    { name: "Crafting", icon: <FaPaintBrush className="text-purple-500 text-4xl" />, level: "Expert" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">Skills</h2>
      <div className="mt-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 w-44 text-center shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-gray-800 font-medium text-lg">{skill.name}</p>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {creativeSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 w-44 text-center shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-gray-800 font-medium text-lg">{skill.name}</p>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
