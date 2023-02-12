import React from "react";

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
          <div
            style={{ backgroundImage: `url({image-name})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-800">
              <spam className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </spam>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url({image-name})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-800">
              <spam className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </spam>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url({image-name})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-800">
              <spam className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </spam>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
