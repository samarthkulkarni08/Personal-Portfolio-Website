import React from "react";
import WorkItem from "./WorkItem";
import accapp from "../assets/accapp.jpg";
import pp from "../assets/pp.jpg";
import resort from "../assets/resort.jpg";
import weather from "../assets/weather.png";
import expcal from "../assets/expcal.jpg";
import cointrend from "../assets/cointrend.jpg";
import todo from "../assets/todo.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full  text-gray-300 bg-[#041525]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-[#4361ee] ">
            Work
          </p>
          <p className="py-6">--Check out some of my recent work--</p>
        </div>
        <div className="pb-8">
          <p className="text-4xl font-bold text-center">
            Web Development Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* item */}
          <WorkItem link={weather} title={"Weather App using React "} demo={'https://samarthkulkarni08.github.io/React-Weather-App/'} code={'https://github.com/samarthkulkarni08/React-Weather-App'} />
          <WorkItem link={ todo } title={"Todo App using React & Firebase"} demo={'https://samarthkulkarni08.github.io/Todo-App/'} code={'https://github.com/samarthkulkarni08/Todo-App'}/>
          <WorkItem link={ cointrend } title={"CoinTrend App using React & Firebase"} demo={'https://samarthkulkarni08.github.io/CoinTrend-App/'} code={'https://github.com/samarthkulkarni08/CoinTrend-App'}/>
          <WorkItem link={ expcal } title={"ExpenseTracker & Calculator App using React"} demo={'https://samarthkulkarni08.github.io/ExpenseTracker-and-Calculator/'} code={'https://github.com/samarthkulkarni08/ExpenseTracker-and-Calculator'}/>
        </div>
        <br />
        <br />
        <div className="pb-8">
          <p className="text-4xl font-bold text-center">
            Design Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* item */}
          <WorkItem link={accapp} title={"Art Gallery's Auction App Design"} demo={'https://www.figma.com/proto/RB6TIecS0m5vBOicMu3CEW/Auction-App?page-id=0%3A1&node-id=2%3A6204&viewport=-697%2C546%2C0.2&scaling=scale-down&starting-point-node-id=1%3A6136&show-proto-sidebar=1'} code={'https://www.figma.com/file/RB6TIecS0m5vBOicMu3CEW/Auction-App?node-id=0%3A1&t=Q7DZe9gwBUKhEyKi-1'}/>
          <WorkItem link={resort} title={"Beach Resort & Restaurant Website Design"} demo={'https://www.figma.com/proto/aE7R2tNRp7eZHYQnQeC6HF/Beach-Resort-%26-Restaurant?page-id=0%3A1&node-id=4%3A2&starting-point-node-id=4%3A2'} code={'https://www.figma.com/file/aE7R2tNRp7eZHYQnQeC6HF/Beach-Resort-%26-Restaurant?node-id=0%3A1&t=U9b9YGctpJMqEtc5-1'}/>
          <WorkItem link={pp} title={"Personal Portfolio Website Design"} demo={'https://www.figma.com/proto/w5glJoIXtGieGD373QOQqe/My-Portfolio?page-id=0%3A1&node-id=235%3A132&viewport=-689%2C176%2C0.18&scaling=min-zoom&starting-point-node-id=235%3A132'} code={'https://www.figma.com/file/w5glJoIXtGieGD373QOQqe/My-Portfolio?node-id=0%3A1&t=OR9uz4QAYErYbmrv-1'}/>
        </div>
      </div>
    </div>
  );
};

export default Work;
