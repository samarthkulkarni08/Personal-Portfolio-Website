import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#041525] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4361ee]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Samarth, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a UI/UX Designer and FrontEnd Developer specializing in
              creating beautiful and effective digital experiences. My portfolio
              showcases my expertise in designing and developing user-centered
              interfaces for various platforms and devices. With a deep
              understanding of design principles and user behavior, I am able to
              create interfaces that are both aesthetically pleasing and
              intuitive to use. As a FrontEnd Developer, I have a strong command
              of HTML, CSS, JavaScript, and other technologies, allowing me to
              bring designs to life with engaging frontend experiences. I look
              forward to working with you to create outstanding products that
              meet your needs and exceed your expectations.
            </p>
          </div>
        </div>
        <div className="my-8 mx-auto justify-center center">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4361ee] hover:text-[#fff] hover:border-[#4361ee]">
            View Resume
            <BsFillPersonLinesFill className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
