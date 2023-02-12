import React from "react";
import WorkItem from "./WorkItem";
import accapp from "../assets/accapp.jpg";
import calci from "../assets/calci.png";
import pp from "../assets/pp.jpg";
import resort from "../assets/resort.jpg";
import weather from "../assets/weather.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#041525]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-[#4361ee] ">
            Work
          </p>
          <p className="py-6">--Check out some of my recent work--</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* item */}
          <WorkItem link={weather} />
          <WorkItem link={calci} />
          <WorkItem link={accapp} />
          <WorkItem link={resort} />
          <WorkItem link={pp} />
        </div>
      </div>
    </div>
  );
};

export default Work;
