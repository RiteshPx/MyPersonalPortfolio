import React from "react";
import image from "../assets/images/homeimage.webp";
import TypingEffect from "../subComponents/TypingEffect";
import WavingHand from "../subComponents/WavingHand";


function Home() {
 
  return (
    <section id="home" className="pt-7"> {/* Add padding-top to avoid overlap */}
      <div className="flex flex-col md:flex-row justify-evenly text-2xl items-center w-screen h-screen bg--600 p-4">
        <div className="bg- p-8 w-full md:w-2/5 text-start text-white">
          <WavingHand />
          <div className="text-4xl text-secondary font-bold mt-9">
            <TypingEffect />
          </div>
          <p className="text-gray-400 mt-9 text-sm leading-relaxed ">
            I am a passionate software developer with experience in building web applications using modern technologies like React, Node.js, and MongoDB. I enjoy solving complex problems and continuously improving my skills.
          </p>
          <a href={require("../assets/images/RiteshResume.pdf")} download className="border text-white px-4 py-2 text-lg mt-4 inline-block">
            Download CV
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={image} alt="Profile" className="h-48 w-48 md:h-96 md:w-96" />
        </div>
      </div>
    </section>
  );
}

export default Home;