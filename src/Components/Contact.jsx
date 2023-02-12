import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen text-gray-300 bg-[#041525] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/d656e7a3-5f68-4c62-ac9d-e0f95efa5195" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-[#4361ee]">
            Contact
          </p>
          <p className="text-gray-300 py-4">--Submit the form below--</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-xl text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-xl text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-xl text-black"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#4361ee] hover:border-[#4361ee] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
