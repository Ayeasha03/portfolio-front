// src/components/sections/projects/CreativeWorks.js
import React from 'react';
import { Link } from 'react-router-dom';
import Wallart from '../../../assets/images/flower.png';
import Gown from '../../../assets/images/gown.mp4';
import Art from '../../../assets/images/art.mp4';
import Ankara from '../../../assets/images/ankara.mp4';
import Clock from '../../../assets/images/clockart.png';
import General1 from '../../../assets/images/general1.mp4';
import Round from '../../../assets/images/round.png';
import Rectangle from '../../../assets/images/rectangularvideo.mp4';
import Cylinder from '../../../assets/images/cylindervase.mp4';
import Nigeria from '../../../assets/images/niart.mp4';
import Circular from '../../../assets/images/roundvase.mp4';
import General from '../../../assets/images/generalvase.mp4';
import Wall from '../../../assets/images/wall.mp4';
import Vase from '../../../assets/images/vase.mp4';
import Table from '../../../assets/images/table.png';
import Table1 from '../../../assets/images/table1.png';
import Blue from '../../../assets/images/blue.mp4';
import Pink from '../../../assets/images/flowerwall.jpg';
import Snowflake from '../../../assets/images/glass.jpg';
import Snowflake2 from '../../../assets/images/glass.mp4';
import Damask from '../../../assets/images/ladies.jpg';
import Bubu from '../../../assets/images/latest.jpg';
import Overlap from '../../../assets/images/neck.mp4';
import Portable from '../../../assets/images/oval.mp4';
import Sequin from '../../../assets/images/sequin.mp4';
import SequinFront from '../../../assets/images/sequinfront.mp4';
import OverlapFront from '../../../assets/images/overlap.mp4';

const creativeProjects = [
  {
    title: "Wall Art",
    description: "It can be placed on a wall for decorative purpose.",
    image: Wallart,
  },
  {
    title: "children ball Gown",
    description: "A hand-sewn party gown for children .",
    video: Gown,
  },
  {
    title: "The flower vase and wall art",
    description: "This is the work of art that can be placed on a wall, on a table, and on the the floor for decorative purpose.",
    video: Art,
  },
  {
    title: "Beautiful Ankara",
    description: "A beautiful hand-sewn Ankara dress for ladies.",
    video: Ankara,
  },
  {
    title: "Clock Art",
    description: "This is a clock art that can be placed on a wall for decorative purpose.",
    image: Clock,
  },
  {
    title: "Straight Gown",
    description: "A hand-sewn straight gown with ankara and have a yellow design with crepe for ladies.",
    video: Blue
  },
  {
    title: "General Art",
    description: "This is a general art that can be placed on a wall for decorative purpose.",
    video: General1,
  },
  {
    title: "Bubu With Pleats",
    description: "A hand-sewn bubu with pleats at the front, front slit and inner belt for ladies with Mikado materia.",
    image: Bubu,

},
  {
    title: "Pink and Blue Flower Wall Art",
    description: "This is a pink and blue flower wall art that can be placed on a wall for decorative purpose.",
    image: Pink
  },
  {
    title: "Damask A-Line Gown with chantilly net",
    description: "A hand-sewn damask A-line gown with chantilly net and a bogous sleeve for ladies.",
    image: Damask
  },
  {
        title: "Circular Flower Vase",
        description: "This is a round flower vase that can be placed on a wall for decorative purpose.",
        image: Round,
  },
  {
        title: "A Criss-cross Top With Trouser Sewn With Ankara",
        description: "A hand-sewn criss-cross top with trouser sewn with ankara for ladies.",
        video: OverlapFront
  },
  {
        title: "Snowflake Art",
        description: "This is a snowflake art with mirror at the center that can be placed on a wall for decorative purpose.",
        image: Snowflake
  },
  {
        title: "Portable Vase",
        description: "This is a portable round flower vase that can be placed on a table for decorative purpose.",
        video: Portable
  },
  {
        title: "Rectangular Art",
        description: "This is a rectangular art that can be placed on a wall for decorative purpose.",
        video: Rectangle
  },
  {
        title: "Skirt And Blouse with sequin",
        description: "A hand-sewn skirt and blouse with sequin and a stylish neck design for ladies.",
        video: Sequin
  },
  {
    title: "Snowflake Art with Glass",
    description: "This is a snowflake art with glass at the center that can be placed on a wall for decorative purpose.",
    video: Snowflake2
  },
  {
    title: "Skirt And Blouse with sequin",
    description: "A hand-sewn skirt and blouse with sequin and a stylish neck design for ladies.",
    video: SequinFront
  },
  {
        title: "Deer Art",
        description: "This is a deer art that can be placed on a table for decorative purpose.",
        image: Table1
  },
  {
      title: "A Criss-cross Top With Trouser Sewn With Ankara(Back)",
      description: "A hand-sewn criss-cross top with trouser sewn with ankara for ladies.",
      video: Overlap
  },
  {
        title: "A beautifully shaped flower Vase",
        description: "This is a cylinder vase that can be placed on a table for decorative purpose.",
        video: Cylinder
  },
  {
        title: "Nigeria National Anthem Art",
        description: "This is Nigeria National Anthem art that can be placed on a wall for decorative purpose.",
        video: Nigeria
    },
    {
        title: "Circular Vase",
        description: "This is a circular vase that can be placed on a table for decorative purpose.",
        video: Circular
    },
    {
        title: "Flower Vases",
        description: "This is a general vase that can be placed on a table for decorative purpose.",
        video: General
    },
    {
        title: "Wall Art",
        description: "This is a wall vase that can be placed on a wall for decorative purpose.",
        video: Wall
    },
    {
        title: "Deer Art and Stick Safe Box",
        description: "This is a deer art and stack safe box that can be placed on a table for decorative purpose. The stack safe box can be used to store items like keys.",
        image: Table,
    },
    {
        title: "Vase",
        description: "This is a vase that can be placed on a table for decorative purpose.",
        video: Vase
    },
];

function CreativeWorks() {
  return (
    <section className="bg-white py-10">
      <h2 className="text-3xl font-bold text-teal-500 text-center mb-6">Creative Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {creativeProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow hover:bg-teal-50"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-[500px] h-auto max-h-[300px] object-contain rounded"
              />
            ) : (
              <video
                src={project.video}
                controls
                className="w-full max-w-[500px] h-auto max-h-[300px] object-contain rounded"
              />
            )}
            <h4 className="font-medium text-gray-800 mt-4">{project.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/" className="text-teal-500 hover:underline px-4 py-2 border border-teal-500 rounded">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default CreativeWorks;
