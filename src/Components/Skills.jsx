import React from "react";
import html5 from "../assets/html5.png";
import css from "../assets/css.png";
import design from "../assets/design.png";
import javascript from "../assets/javascript.png";
import figma from "../assets/figma.png";
import rlogo from "../assets/rlogo.png";
import pylogo from "../assets/pylogo.png";
import tcss from "../assets/tcss.png";
import Github from "../assets/github.png";
import Firebase from "../assets/firebase.png";
import AdobeXD from "../assets/adobe-xd.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen bg-[#041525] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#4361ee] ">
            Skills
          </p>
          <p className="py-4">--These are the technologies I've worked with--</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html5} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p className="my-4">CSS3</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={rlogo} alt="HTML icon" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tcss} alt="HTML icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={pylogo} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={design} alt="HTML icon" />
            <p className="my-4">Ui/UX Design</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={figma} alt="HTML icon" />
            <p className="my-4">Figma</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AdobeXD} alt="HTML icon" />
            <p className="my-4">AdobeXD</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="pt-4 shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
            <p className="my-4">Git & Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
