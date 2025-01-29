import React from 'react';

function HeroSection() {
  return (
    <header className="bg-gray-100 text-center py-10">
      <h1 className="text-4xl font-bold text-teal-500">Ayeasha Creations</h1>
      <p className="text-lg text-gray-700 mt-4">Code. Craft. Create.</p>
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="cursor-pointer px-4 py-2 bg-teal-500 text-white rounded shadow hover:bg-teal-600"
          onClick={() =>
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          View My Work
        </button>
        <button
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 rounded shadow hover:bg-gray-300"
          onClick={() =>
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Get in Touch
        </button>
        <a
  href="/Ayeasha-Creations-Resume.pdf"
  download="Ayeasha-Creations-Resume"
  className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
>
  Download Resume
</a>

      </div>
    </header>
  );
}

export default HeroSection;
