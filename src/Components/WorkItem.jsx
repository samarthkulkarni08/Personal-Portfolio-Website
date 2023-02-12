import React from 'react'

const WorkItem = ({link,title,demo,code}) => {
  return (
    <div
    style={{ backgroundImage: `url(${link})`}}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
      flex justify-center text-center items-center mx-auto content-div"
  >
    {/* hover effects */}
    <div className="opacity-0 group-hover:opacity-100 ease-in duration-800">
      <spam className="text-2xl font-bold text-white tracking-wider">
        {/* React JS Application */}{`${title}`}
      </spam>
      <div className="pt-8 text-center">
        <a href={`${demo}`}>
          <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
            Demo
          </button>
        </a>
        <a href={`${code}`}>
          <button className="text-center font-bold text-gray-700 px-4 py-3 m-2 bg-white text-lg rounded-xl hover:bg-[#041525] hover:text-white">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default WorkItem