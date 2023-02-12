import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#041525]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#4361ee] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Samarth R Kulkarni
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0]">
          I'am a UI/UX Designer and FrontEnd Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        I am a skilled UI/UX Designer and FrontEnd Developer with a passion for creating user-centered digital experiences. My portfolio showcases my expertise in designing and developing interfaces for various platforms and devices. With a deep understanding of design principles and user behavior, I bring creativity and technical expertise to every project. I am confident in my ability to create outstanding products that meet the needs of users and exceed the expectations of stakeholders.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4361ee] hover:text-[#fff] hover:border-[#4361ee]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
