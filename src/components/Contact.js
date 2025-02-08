import React from "react";
import img from "../assets/images/ritesh.png";
import HighlightText from "../subComponents/HighlightText";
import SocialLinks from "../subComponents/SocialLinks";

function Contact() {
  return (
    <section id="contact" className="w-full flex-col justify-center">
      <div>
        <div className="container mx-auto px-4 w-2/3 mb-10">
          <h2 className="text-3xl font-bold text-white mb-6">Summary</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src={img} alt="Ritesh" className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-6" />
            <p className="text-white text-lg">
              Hi, I'm Ritesh. I'm a passionate developer with experience in building web applications.
              Feel free to reach out to me for any collaboration or project inquiries.
            </p>
          </div>
        </div>
      </div>
      <div>
        <SocialLinks />
      </div>
    </section>
  );
}

export default Contact;