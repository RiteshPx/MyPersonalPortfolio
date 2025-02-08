import React, { useEffect } from "react";
import image from "../assets/images/homeimage.webp";
import TypingEffect from "../subComponents/TypingEffect";
import WavingHand from "../subComponents/WavingHand";

function Home() {
  useEffect(() => { alert("working....on portfolio!") }, []);
  return (
    <section id="home" >
      <div className="flex justify-evenly text-2xl items-center w-screen h-screen bg--600 p-4">
        <div className="bg- p-8 w-2/5 text-start text-white">
          <WavingHand/>
          <div className="text-4xl text-secondary font-bold mt-9">
            <TypingEffect />
          </div>
          <p className="text-gray-400 mt-9 text-sm leading-relaxed">
            I am a passionate software developer with experience in building web applications using modern technologies like React, Node.js, and MongoDB. I enjoy solving complex problems and continuously improving my skills.
          </p>
          <a href="/path/to/your/cv.pdf" download className="border  text-white px-4 py-2 text-lg mt-4 inline-block">Download CV</a>
        </div>
        <div className="">
          <img src={image} alt="Profile" className="h-96 w-96" />
        </div>
      </div>
    </section>
  );
}

export default Home;