import React from "react";
import image from "../assets/image.png";

function Home() {
  return (
    <section id="home" >
      <div className="flex justify-evenly text-2xl items-center h-screen bg-gray-600 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-start">
          <p className="text-lg text-gray-700">Hi There! I'm</p>
          <div className="text-4xl text-secondary font-bold mt-2">
            Developer
          </div>
          <div className="text-gray-600 mt-2">small description of job</div>
          <a href="/path/to/your/cv.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 inline-block">Download CV</a>
        </div>
        <div className=" ">
          <img src={image} alt="Profile" className="h-96 w-96" />
        </div>
      </div>
    </section>
  );
}

export default Home;