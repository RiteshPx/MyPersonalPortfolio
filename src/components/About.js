import React from "react";
import HighlightText from "../subComponents/HighlightText";
import img from "../assets/images/ritesh.png";


function About() {
  return (
    <section id="about" >
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-2">
      <div className="bg-gray-900 p-2 rounded-xl shadow-lg">
        <h2 className="text-red-500 text-3xl font-bold mb-2">About Me</h2>
        <p className="text-gray-400 text-center">Professional Profile - There Is All About Me</p>
        <h2 className="text-red-500 text-2xl">...</h2>
        <div className="flex flex-col md:flex-row items-center mt-6 text-start ">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img src={img} alt="Profile" className="h-48 w-48 md:h-80 md:w-80 rounded-full shadow-lg mx-11" />
          </div>
          <div className="md:ml-6 mt-4 flex-col justify-center md:mt-0 max-w-3xl text-gray-400 text-sm">
            <h3 className="text-2xl font-semibold border-b ">I'm <span className="text-white">Ritesh Parmar</span>,</h3>
            <p className="text-gray-400 mt-2  leading-relaxed">
              a programming enthusiast with an interest in building software products. Currently, I'm pursuing Btech. in Computer Science & Engineering. My journey in the field of programming started in 2019 when I was introduced to the world of programming through my college curriculum.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">              
              I started my journey by learning <HighlightText>C/C++</HighlightText>. Later on, I started exploring full stack development using Javascript. Meanwhile, I got well acquainted with the <HighlightText>MERN</HighlightText> stack by working on and developing a couple of projects.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-2 place-items-start text-left>">
              <p><span className="text-red-400">📅 Date of birth:</span> 15 May 2004</p>
              <p><span className="text-red-400">🌍 Nationality:</span> India</p>
              <p><span className="text-red-400">💼 Freelance:</span> Available</p>
              <p><span className="text-red-400">📞 Phone:</span> +91 97532 30663</p>
              <p><span className="text-red-400">📍 Address:</span> Indore, Madhya Pradesh</p>
              <p><span className="text-red-400">📧 Email:</span> parmaritesh17@gmail.com</p>
              <p><span className="text-red-400">🗣 Spoken Languages:</span> English - Hindi</p>
              <p><span className="text-red-400">💬 Skype:</span> no</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;