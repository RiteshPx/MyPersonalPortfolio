import React from "react";
import img from "../assets/images/ritesh.png";
import HighlightText from "../subComponents/HighlightText";
import SocialLinks from "../subComponents/SocialLinks";

function Contact() {
  return (
    <section id="contact" className="w-full mt-36 h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="container mx-auto px-4 w-2/3 mb-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Summary</h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src={img} alt="Ritesh" className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-6" />
          <p className="text-white text-lg text-center md:text-left">
            Hi, I'm Ritesh. I'm a passionate developer with experience in building web applications.
            Feel free to reach out to me for any collaboration or project inquiries.
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <SocialLinks />
      </div>
    </section>
  );
}

export default Contact;
