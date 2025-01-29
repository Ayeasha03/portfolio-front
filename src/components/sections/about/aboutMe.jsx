import React from 'react';
import ProfileImage from '../../../assets/images/pics.jpg'; 

function AboutMe() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-teal-500">About Me</h2>
          <p className="text-gray-700 mt-4">
            I am a software engineer with a passion for creativity. I craft
            functional digital solutions and design stunning handcrafted
            creations. When I’m not coding, you’ll find me sewing bespoke
            outfits or crafting decorative pieces.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={ProfileImage}
            alt="About Me"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
